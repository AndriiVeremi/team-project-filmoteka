import ApiClient from './fetch-API';
import { renderMarkup } from './renderMarkup.js';
import * as searcFilm from './searchFilms.js';

const API = new ApiClient();

const modalWindow = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn-close');
const cardMovie = document.querySelector('.gallery');

cardMovie.addEventListener('click', openModal);

const modal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

async function openModal(ev) {
  ev.preventDefault();

  const id = ev.target.dataset.id;
  console.log(id);

  // API.movie_id = ev.target.dataset.id;
  const idMovie = await API.getMoveInfo();

  console.log(idMovie);

  // renderMarkup(idMovie.data.results);
}

btnCloseModal.addEventListener('click', modal);
// overlay.addEventListener('click', modal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal();
  }
});
