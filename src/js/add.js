// import * as basicLightbox from 'basiclightbox';

import * as popular from './popularMovies.js';
import * as render from './renderMarkup.js';

import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

refs.gallery.addEventListener('click', clickOnMovie);

async function clickOnMovie(e) {
  e.preventDefault();
  try {
    // if (e.target.nodeName === 'LI') {
    //   const idMovie = e.target.id;
    //   const response = await API.getMoveInfo(moveId);
    //   console.log(idMovie);

    //   // createMarkupMovieCardInModal(response);
    // }

    if (
      e.target.nodeName === 'DIV' ||
      e.target.nodeName === 'IMG' ||
      e.target.nodeName === 'H2' ||
      e.target.nodeName === 'P'
    ) {
      console.log(e.target.nodeName);
      const moveId = e.target.dataset.id;

      // let id = data.data.results.id

      console.log(moveId);

      const response = await API.getMoveInfo(moveId);
    }
  } catch (error) {
    console.log('message');
  }
}
