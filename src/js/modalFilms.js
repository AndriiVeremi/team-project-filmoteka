import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderModalFilms } from './renderModalFilms.js';

const refs = getRefs();
const API = new APIservice();

async function clickMove(event) {
    event.preventDefault();

    const moveId = event.target.dataset.id;
    
    console.log(moveId);
    try {
        
        const response = await API.getMoveInfo(moveId).then(renderModalFilms)
        console.log(response)
        
       
        

    } catch (error) {
        console.log(error);
    } 

    // renderCardFilms(response)
}

refs.gallery.addEventListener('click', clickMove);





















// export function renderCardFilms(film) {
    
//     const markup = film.map(({ poster_path, title, popularity, id, genres, vote_average, vote_count, original_title }) => {
//         return `<div class="modal__container">
//     <div class="film__image">
//         ${poster_path}
//         <img class="image" src="https://www.themoviedb.org/t/p/w500${poster_path}"
//             alt="${title}" title="${title}" />
        
//         ${poster_path}
//         <img class="image" src="https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg"
//             alt="film photo">
//     </div>

//     <div class="film__information">
//         <div>
//             <h2 class="film__title">${title}</h2>
//             <ul>
//                 <li class="film__item">
//                     <p class="film__details ">Vote / Votes</p>
//                     <p class="film__info--uper">
//                         <span class=" film__rating--orange">${vote_average}</span>
//                         <span class="film__rating--divider"> / </span>
//                         <span>${vote_count}</span>
//                     </p>
//                 </li>
//                 <li class="film__item">
//                     <p class="film__details ">Popularity</p>
//                     <p class="film__info--uper">${popularity}</p>
//                 </li>
//                 <li class="film__item">
//                     <p class="film__details">Original title</p>
//                     <p>${original_title}</p>
//                 </li>
//                 <li class="film__item">
//                     <p class="film__details">Genre</p>
//                     <p class="film__info">
//                         ${genres}
                        
                
                        
//                     </p>
//                 </li>
//             </ul>
//         </div>
//         <div>
//             <h3 class="film__about__title">About</h3>
//             <p class="film__about__text">
//                 {{overview}}
//             </p>
//         </div>
//         <div class="film__button__wrapper">
//             <button type="button" class=" film__button btn__watch" data-id="${id}">Add to watched</button>
//             <button type="button" class=" film__button btn__queue" data-id="${id}">Add to queue</button>
//         </div>
//         <button type="button" class="close__button" data-action="close-modal"></button>
//     </div>
//  </div>`;
//     }).join('');
//     const modal = basicLightbox.create(markup);
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
// };



// // function openModal(e) {
// //     modal.show();

// //     window.addEventListener('keydown', closeModalHandler);

// //     function closeModalHandler(e) {
// //         if (e.code === 'Escape') {
// //             modal.close();
// //             window.removeEventListener('keydown', closeModalHandler);
// //         }
// //     }
// // }


