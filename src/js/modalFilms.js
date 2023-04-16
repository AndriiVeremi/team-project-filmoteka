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
        const hits = response.data;  
        
        console.log(hits)

        renderModalFilms(hits)
    } catch (error) {
        console.log(error);
    }   
}

refs.gallery.addEventListener('click', clickMove);

function renderModalFilms({
    poster_path,
    original_title,
    title,
    name,
    vote_average,
    vote_count,
    genres,
    overview,
    popularity,
    id,
}) {
    const filmGenres = genres.map(({ name }) => name).join(', ');
    return `<div class="film__image">
      <img class="image" src=https://image.tmdb.org/t/p/original${poster_path} alt=${title || original_title || name
        } />
    </div>
    <div class="film__information">
      <div>
        <h2 class="film__title">${title || original_title || name}</h2>
        <ul>
          <li class="film__item">
            <p class="film__details">Vote / Votes</p>
            <p class="film__info--uper">
              <span class="film__rating--orange">${vote_average}</span>
              <span class="film__rating--divider"> / </span>
              <span class="vote-count">${vote_count}</span>
            </p>
          </li>
          <li class="film__item">
            <p class="film__details">Popularity</p>
            <p class="film__info--uper">${popularity}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Original title</p>
            <p>${title || original_title || name}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            <p class="film__info">${filmGenres}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="film__about__title">About</h3>
        <p class="film__about__text">${overview}</p>
      </div>
      <div class="film__button__wrapper">
        <button type="button" class="film__button btn__watch" data-id=${id}>Add to watched</button>
        <button type="button" class="film__button btn__queue" data-id=${id}>Add to queue</button>
      </div>
      <div class="film__trailer">
        <a class="btn btn-large btn-primary film__trailer__btn" href="#">
          <i class="fa-brands fa-youtube fa-3x"></i>
          <p class="film__trailer__text">watch trailer</p>
        </a>
      </div>
      </div>`;
}
modal.show();
refs.gallery.addEventListener('click', openModal);
const modal = basicLightbox.create(renderModalFilms);


// function openModal(e) {
//     modal.show();

//     window.addEventListener('keydown', closeModalHandler);

//     function closeModalHandler(e) {
//         if (e.code === 'Escape') {
//             modal.close();
//             window.removeEventListener('keydown', closeModalHandler);
//         }
//     }
// }