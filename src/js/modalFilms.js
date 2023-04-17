import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Notiflix, { Notify } from 'notiflix';
import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

async function clickMove(event) {
  event.preventDefault();
  const moveId = event.target.closest('li').dataset.id;
  try {
    const response = await API.getMoveInfo(moveId)
    const data = response.data;
    renderModalFilms(data);
  } catch (error) {
    console.log(error);
  }

  const wathcedAdd = document.querySelector(`[data-add="wathced"]`);
  const queueAdd = document.querySelector(`[data-add="queue"]`);
  wathcedAdd.addEventListener('click', addToWatched);
  queueAdd.addEventListener('click', addToQueue);

}

refs.gallery.addEventListener('click', clickMove);

function renderModalFilms({
  poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  genres,
  overview,
  popularity,
  id,
}) {

  const checkImg = url =>
    `${!url
      ? `https://img.freepik.com/premium-vector/video-production-logo-fun-modern-black_434503-786.jpg?w=1060`
      : `https://image.tmdb.org/t/p/w500${url}`
    }`;

  const movieGenres = genres.map(({ name }) => name).join(', ');
  const markup = `<div class="modal-movie" id="modal_movie">
  <div class="movie-card">
  <div class="movie-card_request">
    <div class="movie-card_img-cover">
      <img
      class="movie-card_photo"
      src="${checkImg(poster_path)}"
      alt="${title}"
    />
      <button type="button" class="button-open-trailer"></button>
    </div>
  </div>
  <div class="movie-description">
    <h2 class="movie-title">${title}</h2>
    <table class="movie-table">
      <tbody>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Vote/Votes</p>
          </td>
          <td>
            <p>
              <span class= "movie-table_vote"> <span class= "movie-table_vote_aver">
              ${vote_average.toFixed(1)} </span> / ${vote_count}</span>
            </p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Popularity</p>
          </td>
          <td>
            <p>${popularity}</p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Original Title</p>
          </td>
          <td>
             <p class="movie-table_title_ori">${original_title}</p>
          </td>
        </tr>
        <tr class="movie-table_row">
          <td>
            <p class="movie-table_title">Genre</p>
          </td>
          <td>
            <p>${movieGenres}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="movie-about_container">
    <h3 class="movie-about">About</h3>
    <p class="movie-about_text">${overview}</p>
  </div>
    <ul class="movie-list">
      <li class="movie-item">
        <button type="button" class="movie-item_button" data-id=${id} data-add="wathced">Add to watched</button>
      </li>
      <li class="movie-item">
        <button type="button" class="movie-item_button" data-id=${id} data-add="queue">Add to queue</button>
       </li>
    </ul>
  </div>
</div>
</div>`;

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      refs.body.classList.add('no-scroll');
      window.addEventListener('keydown', event => closeModalEscape(event));
    },
    onClose: instance => {
      document.querySelector('.modal-movie').style.overflowY = 'scroll';
      refs.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', event => closeModalEscape(event));
    },
  });

  instance.show();

  const buttonTreiler = document.querySelector('.button-open-trailer');
  buttonTreiler.addEventListener('click', clickTrailer);

  function closeModal(event) {
    instance.close();

  }

  function closeModalEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }
    closeModal();
  }

}

export function clickTrailer(event) {
  event.preventDefault();

  const filmIdToLS = document.querySelector(`[data-add="wathced"]`).dataset.id;

  API.getMoveVideo(filmIdToLS).then(data => {
    if (data.data.results.length > 0) {
      window.open(
        `https://www.youtube.com/watch?v=${data.data.results[0].key}`,
        '_blank'
      );
    } else {
      Notify.failure('Sorry, but there is no trailer for this movie');
    }
  });
}


export function addToWatched(event) {

  const filmIdToLS = document.querySelector(`[data-add="wathced"]`).dataset.id;
  const parsedWathcedFilms = JSON.parse(localStorage.getItem('WatchedFilms'));

  if (parsedWathcedFilms === null) {
    Notiflix.Report.success('Film added to WATCHED');
    localStorage.setItem('WatchedFilms', JSON.stringify([filmIdToLS]));
  } else if (parsedWathcedFilms.includes(filmIdToLS)) {
    Notiflix.Report.failure('The movie been added to the list!');
    return;
  } else {
    parsedWathcedFilms.push(filmIdToLS);
    Notiflix.Report.success('Film added to WATCHED');
    localStorage.setItem('WatchedFilms', JSON.stringify(parsedWathcedFilms));
  }
}

export function addToQueue(event) {

  const filmIdToLS = document.querySelector(`[data-add="queue"]`).dataset.id;
  const parsedQueueFilms = JSON.parse(localStorage.getItem('QueueFilms'));

  if (parsedQueueFilms === null) {
    Notiflix.Report.success('Film added to QUE');
    localStorage.setItem('QueueFilms', JSON.stringify([filmIdToLS]));
  } else if (parsedQueueFilms.includes(filmIdToLS)) {
    return Notiflix.Report.failure('The movie been added to the queue!');
  } else {
    parsedQueueFilms.push(filmIdToLS);
    Notiflix.Report.success('Film added to QUEUE');
    localStorage.setItem('QueueFilms', JSON.stringify(parsedQueueFilms));
  }
}





