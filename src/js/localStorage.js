import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';
import { instance } from './pagination.js';

const API = new APIservice();
const refs = getRefs();

const QUEUE_KEY = 'QueueFilms';
const WATCHED_KEY = 'WatchedFilms';

refs.watchedBtn.addEventListener('click', showWatched);
refs.queueBtn.addEventListener('click', showQueue);

async function showWatched() {
  try {
    localStorage.getItem(WATCHED_KEY) === null
      ? (refs.gallery.innerHTML = '')
      : JSON.parse(localStorage.getItem(WATCHED_KEY));
  } catch (error) {
    console.error(message);
  }
  const filmIdToLS = JSON.parse(localStorage.getItem(WATCHED_KEY));
  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    const results = response.data.results;
    for (const id of filmIdToLS) {
      const moveId = results.filter(item => item.id == id);
      instance.setTotalItems(WATCHED_KEY);
      instance.reset();
      renderMarkup(moveId);
    }
  } catch (error) {
    console.log(error);
  }
}

async function showQueue() {
  try {
    localStorage.getItem(QUEUE_KEY) === null
      ? (refs.gallery.innerHTML = '')
      : JSON.parse(localStorage.getItem(QUEUE_KEY));
  } catch (error) {
    console.error(message);
  }
  const filmIdToLS = JSON.parse(localStorage.getItem(QUEUE_KEY));
  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    const results = response.data.results;
    for (const id of filmIdToLS) {
      const moveId = results.filter(item => item.id == id);
      instance.setTotalItems(QUEUE_KEY);
      instance.reset();
      renderMarkup(moveId);
    }
  } catch (error) {
    console.log(error);
  }
}
