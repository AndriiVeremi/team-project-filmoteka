import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

import getRefs from './refs.js';
import { API, popularMovies } from './popularMovies';

const refs = getRefs();

const instance = new Pagination('tui-pagination-container', {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
});

// instance.setTotalItems(100);
instance.on('beforeMove', event => {
  refs.gallery.replaceChildren();
  API.page = event.page;
  popularMovies();
});
