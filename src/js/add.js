import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as popular from './popularMovies.js';


import getRefs from './refs.js';
import APIservice from './fetch-API.js';

const refs = getRefs();
const API = new APIservice();

refs.gallery.addEventListener('click', clickOnMovie);

async function clickOnMovie(event) {
    event.preventDefault();



    try {

        let moveId = event.target.dataset.id;
        // let id = data.data.results.id

        console.log(moveId)


        const response = await API.getMoveInfo(948713);
        console.log(response)

    } catch (error) {
        console.log('message')
    }

}

