import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';
import { popularMovies } from './popularMovies.js';

const API = new APIservice();

const refs = getRefs();

// const formData = {};
const QUEUE_KEY = 'queue';
const WATCHED_KEY = 'watched';

// refs.addToWatchedBtn.addEventListener('click', setWatched);
// refs.addToQueueBtn.addEventListener('click', setQueue);
refs.watchedBtn.addEventListener('click', showWatched);
refs.queueBtn.addEventListener('click', showQueue);

console.log(refs.gallery);

async function showWatched() {
  const data = await API.getMoveTrending();
  console.log(data);
  console.log(data.data.results[4].id);
  // API.resetPage();
  try {
    localStorage.getItem(WATCHED_KEY) === null
      ? (refs.gallery.innerHTML = '')
      : JSON.parse(localStorage.getItem(WATCHED_KEY));
  } catch (error) {
    console.error(message);
  }
  // const resp = API.getMoveTrending();
  // console.log(resp.data.results);
  // popularMovies();
  renderMarkup(data.data.results);
}

function showQueue() {
  try {
    localStorage.getItem(QUEUE_KEY) === null
      ? (refs.gallery.innerHTML = '')
      : JSON.parse(localStorage.getItem(QUEUE_KEY));
  } catch (error) {
    console.error(message);
  }
  // renderMarkup();
}

function setWatched() {
  const wotchedId = API.getMoveInfo(moveId);
  localStorage.setItem(WATCHED_KEY, JSON.stringify(formData));
}

function setQueue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(QUEUE_KEY, JSON.stringify(formData));
}
