import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';

import getRefs from './refs.js';
import { API, popularMovies } from './popularMovies';
import { fetchMoviesSearchQuery } from './searchFilms.js';

const refs = getRefs();

export const instance = new Pagination('tui-pagination-container', {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  template: {
    moveButton: (context) => {
      const textContent = context.type == 'first' ? 1 : 1000;
      return `<a href="#" class="tui-page-btn tui-${context.type}">
        <span class="tui-ico-${context.type}">${textContent}</span>
      </a>`
    },
    disabledMoveButton: (context) => {
      const textContent = context.type == 'first' ? 1 : 1000;
      return `<a href="#" class="tui-page-btn tui-is-disabled tui-${context.type}">
        <span class="tui-ico-${context.type}">${textContent}</span>
      </a>`
    },
  }
});

instance.on('beforeMove', event => {
  API.page = event.page;
  if (!API.query.trim()) {
    refs.gallery.replaceChildren();
    popularMovies();
  } else {
    fetchMoviesSearchQuery();
  }
});

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', () => {
  instance.reset();
});
