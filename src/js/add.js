
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';




import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

const id = '20'

export async function modalMovies(id) {
    try {
        const data = await API.getMoveInfo(moveId);
        console.log(data);

        // renderMarkup(data);

        // console.log(data);
        // console.log(arrGenreId);
    } catch (error) {
        console.log(error);
    }
}

modalMovies(id)


// // let page = 1;
// const apiKey = 'd91911ebb88751cf9e5c4b8fdf4412c9';

// const cardFilm = document.querySelector('.card__colection');

// cardFilm.addEventListener('click', openModal);

// function fetchOneMovieInfo(movie_id) {
//     const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => ({
//             ...data,
//             popularity: data.popularity.toFixed(1),
//         }));
// }

// function openModal(e) {
//     e.preventDefault();

//     fetchOneMovieInfo(e.target.dataset.id)
//         .then(data => {
//             if (e.target.nodeName !== 'IMG') return;

//             const markup = modalFilmCard(data);
//             const modal = basicLightbox.create(markup);

//             modal.show();

//             const closeBtn = document.querySelector('.modal-close-btn');
//             closeBtn.addEventListener('click', closeModal);

//             window.addEventListener('keydown', closeModalHandler);

//             function closeModalHandler(e) {
//                 if (e.code === 'Escape') {
//                     modal.close();
//                     window.removeEventListener('keydown', closeModalHandler);
//                 }
//             }

//             function closeModal(e) {
//                 modal.close();
//                 window.removeEventListener('keydown', closeModalHandler);
//             }

//             //new Function
//             // initStorageBtns();
//         })
//         .then(data => { })
//         .catch(error => {
//             console.log('oops!');
//         });
// }