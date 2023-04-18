import ApiClient from './fetch-API';
import { renderMarkup } from './renderMarkup';
import  getRefs  from './refs';
import { replaceIdtoGenre } from './popularMovies';
import { instance } from './pagination';

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
        showNotification('Please, enter your search query!');
        return;
    }
    client.resetPage();
    client.query = searchQuery;
    fetchMoviesSearchQuery();
    instance.reset();
    clearInput();
}

export async function fetchMoviesSearchQuery() {
    clearGallery();
    
    const resp = await client.getMoveName();

    if (resp.status !== 200) {
        showNotification('Something went wrong...');
        return;
    }
    if (resp.data.results.length === 0) {
        showNotification('Search result not successful. Enter the correct movie name.');
        return;
    }
    const results = resp.data.results;
    const arrGenreId = results.map(item => item.genre_ids);

    const genreResponse = await client.getMoveGanres();
    const arrGenre = genreResponse.data.genres;

    const lastSearchFilmPage = document.querySelector('.tui-ico-last');
    lastSearchFilmPage.textContent = resp.data.total_pages;

    instance.setTotalItems(resp.data.total_results);

    replaceIdtoGenre(arrGenre, arrGenreId);
    renderMarkup(results);
}

function clearInput() {
    input.value = '';
}

function clearGallery() {
    getRefs().gallery.innerHTML = '';
}

let currentNotification = null;

function showNotification(text, className) {
    if (currentNotification !== null) {
    currentNotification.style.display = "none";
    }

    const notification = document.createElement('p');
    notification.classList.add('notification');
    notification.classList.add(className);
    notification.innerHTML = text;
    searchForm.insertAdjacentElement('afterbegin', notification);

    currentNotification = notification;

    setTimeout(function() {
    notification.style.display = "none";
        if (currentNotification === notification) {
        currentNotification = null;
        }
    }, 3000);
}
