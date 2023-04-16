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
        
    try {      
        const response = await API.getMoveInfo(moveId)
        const hits = response.data;  
        
        console.log(hits)
        
        renderModalFilms(hits)
    } catch (error) {
        console.log(error);
    }   
}

refs.gallery.addEventListener('click', clickMove);








