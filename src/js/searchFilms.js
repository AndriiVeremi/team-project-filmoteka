import ApiClient from './fetch-API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMarkup } from './renderMarkup';
import getRefs from './refs';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('[name="searchQuery"]');

const client = new ApiClient();
searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  client.resetPage();
  clearGallery();
  const searchQuery = e.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    Notify.failure('Please, enter your search query!');
    return;
  }
  client.query = searchQuery;
  const resp = await client.getMoveName();
  if (resp.status !== 200) {
    Notify.failure('Something went wrong...');
    return;
  }
  if (resp.data.results.length === 0) {
    Notify.failure(
      'Search result not successful. Enter the correct movie name.'
    );
    return;
  }
  renderMarkup(resp.data.results);

  console.log(resp.data.results);

  clearInput();
}

function clearInput() {
  input.value = '';
}

function clearGallery() {
  getRefs().gallery.innerHTML = '';
}
