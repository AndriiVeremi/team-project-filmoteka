import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import getRefs from './refs.js';
import { API, popularMovies } from './popularMovies';
import { fetchMoviesSearchQuery } from './searchFilms.js';

const refs = getRefs();

const instance = new Pagination('tui-pagination-container', {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
});

// instance.setTotalItems(100);
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
