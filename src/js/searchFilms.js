import ApiClient from './fetch-API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMarkup } from './renderMarkup';
import  getRefs  from './refs';
import { replaceIdtoGenre } from './popularMovies';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('[name="searchQuery"]');

const client = new ApiClient();
searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
    e.preventDefault();
    const searchQuery = input.value
        .trim()
        .toLowerCase();
    
    if (!searchQuery) {
        Notify.failure('Please, enter your search query!');
        return;
    }
    client.resetPage();
    client.query = searchQuery;
    fetchMoviesSearchQuery();
    clearInput();
}

export async function fetchMoviesSearchQuery() {
    clearGallery();
    
    const resp = await client.getMoveName();

    if (resp.status !== 200) {
        Notify.failure('Something went wrong...');
        return;
    }
    if (resp.data.results.length === 0) {
        Notify.failure('Search result not successful. Enter the correct movie name.');
        return;
    }
    const results = resp.data.results;
    const arrGenreId = results.map(item => item.genre_ids);

    const genreResponse = await client.getMoveGanres();
    const arrGenre = genreResponse.data.genres;

    replaceIdtoGenre(arrGenre, arrGenreId);
    renderMarkup(results);
}

function clearInput() {
  input.value = '';
}

function clearGallery() {
  getRefs().gallery.innerHTML = '';
}
