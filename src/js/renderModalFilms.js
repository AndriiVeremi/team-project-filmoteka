import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


import getRefs from './refs.js';
import APIservice from './fetch-API.js';


const refs = getRefs();
const API = new APIservice();

// const modal = basicLightbox.create(markup);
// modal.show();

export function renderModalFilms(results) {
    const markup = results
        .map(({ poster_path, title, id, release_date, genre_ids }) => {
            return `<li class="gallery-item" data-id="${id}">
    <a href="" class="gallery-link">
      <div class="gallery-card">
        <img class="gallery-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
      </div>
      <div class="gallery-info">
        <h2 class="gallery-title">${title}</h2>
        <p class="gallery-text">${genre_ids.join(', ')} | ${dateRelease(
                release_date
            )}</p>
      </div>
    </a>
    </li>`;
        })
        .join('');
    refs.gallery.addEventListener('click', openModal);
    // refs.gallery.insertAdjacentHTML('beforeend', markup);
    const modal = basicLightbox.create(markup);
}

// refs.gallery.addEventListener('click', openModal);

// const modal = basicLightbox.create(markup);
// refs.gallery.insertAdjacentHTML('beforeend', markup);
function openModal(e) {
    modal.show();

    window.addEventListener('keydown', closeModalHandler);

    function closeModalHandler(e) {
        if (e.code === 'Escape') {
            modal.close();
            window.removeEventListener('keydown', closeModalHandler);
        }
    }
}





