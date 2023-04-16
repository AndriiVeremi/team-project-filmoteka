import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';

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
  console.log(filmIdToLS);

  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    console.log(response.data.results);
    const results = response.data.results;
    for (const id of filmIdToLS) {
      console.log(id);
      const moveId = results.filter(item => item.id == id);
      console.log(moveId);
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
  console.log(filmIdToLS);

  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    console.log(response.data.results);
    const results = response.data.results;
    for (const id of filmIdToLS) {
      console.log(id);
      const moveId = results.filter(item => item.id == id);
      console.log(moveId);
      renderMarkup(moveId);
    }
  } catch (error) {
    console.log(error);
  }
}
