import getRefs from './refs.js';

const refs = getRefs();

export function renderMarkup(results) {
  const markup = results
    .map(({ poster_path, title, id, release_date, genre_ids }) => {
      return `<li class="gallery-item" data-id="${id}">
    <a href="${checkedImg(poster_path)}" class="gallery-link">
      <div class="gallery-card">
        <img class="gallery-photo" src="${checkedImg(poster_path)}" alt="${title}" loading="lazy" />
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
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
 
// Перевірка дати виходу фільма
const dateRelease = value =>
  `${!value ? 'Unknown year' : `${value.slice(0, 4)}`}`;

// Перевірка фото
const checkedImg = url =>
  `${!url
    ? `https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg`
    : `https://image.tmdb.org/t/p/w500${url}`
  }`;
