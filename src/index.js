import getRefs from './js/refs';
import APIservice from './js/fetch-API';
import { popularMovies } from './js/popularMovies';

const refs = getRefs();
const API = new APIservice();

// При завантажені сторінки відразу загружаються популярні фільми
popularMovies();

