import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

export function renderMarkup(results) {
  const markup = results.map(({ poster_path, title, id, release_date, genre_ids, }) => {
    return `<li class="gallery-item" data-id="${id}">
    <a href="" class="gallery-link">
      <div class="gallery-card">
        <img class="gallery-photo" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
      </div>
      <div class="gallery-info">
        <h2 class="gallery-title">${title}</h2>
        <p class="gallery-text">${genre_ids.join(', ')} | ${dateRelease(release_date)}</p>
      </div>
    </a>
    </li>`;
  }).join("");
  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

// Перевірка дати виходу фільма
const dateRelease = value => `${!value ? 'Unknown year' : `${value.slice(0, 4)}`}`;
