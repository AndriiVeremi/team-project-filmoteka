import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

refs.gallery.addEventListener('click', clickOnMovie);

async function clickOnMovie(event) {
    event.preventDefault();

    try {
        let moveId = event.target.dataset.id;
      
        console.log(moveId)
        
        
        const response = await API.getMoveInfo(moveId);

        
    } catch (error){
        console.log('message')
    }
    
}
