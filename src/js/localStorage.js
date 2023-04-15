import getRefs from './refs.js';
import ApiClient from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';

const API = new ApiClient();

const refs = {
  queueBtn: document.querySelector('.queueBtn'),
  addToQueueBtn: document.querySelector('.addToQueueBtn'),
  watchedBtn: document.querySelector('.watchedBtn'),
  addToWatchedBtn: document.querySelector('.addToWatchedBtn'),
};

const formData = {};
const QUEUE_KEY = 'queue';
const WATCHED_KEY = 'watched';

refs.addToWatchedBtn.addEventListener('click', setWatched);
refs.addToQueueBtn.addEventListener('click', setQueue);
refs.watchedBtn.addEventListener('click', showWatched);
refs.queueBtn.addEventListener('click', showQueue);


function showWatched() {
  API.resetPage();
  try {
    localStorage.getItem(WATCHED_KEY) === null
      ? undefined
      : JSON.parse(localStorage.getItem(WATCHED_KEY));
  } catch (error) {
    console.error(message);
  }
  renderMarkup(results);
}

function showQueue() {
  API.resetPage();
  try {
    localStorage.getItem(QUEUE_KEY) === null
      ? undefined
      : JSON.parse(localStorage.getItem(QUEUE_KEY));
  } catch (error) {
    console.error(message);
  }
  renderMarkup(results);
}

function setWatched(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(WATCHED_KEY, JSON.stringify(formData));
}

function setQueue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(QUEUE_KEY, JSON.stringify(formData));
}