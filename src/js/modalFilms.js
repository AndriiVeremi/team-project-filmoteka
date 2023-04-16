import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import getRefs from './refs.js';
import APIservice from './fetch-API.js';


const refs = getRefs();
const API = new APIservice();

async function clickMove(event) {
    event.preventDefault();

    const moveId = event.target.closest('li').dataset.id;
    console.log(moveId)
        
    try {      
        const response = await API.getMoveInfo(moveId)
        console.log(response)
      const data = response.data ;  
        
        console.log(data)

        renderModalFilms(data)
    } catch (error) {
        console.log(error);
    }   
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
  
  const instance = basicLightbox.create(markup);

  instance.show();
}


