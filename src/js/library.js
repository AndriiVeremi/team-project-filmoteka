import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';
import {replaceIdtoGenre} from './popularMovies.js'
import { instance } from './pagination.js';



const API = new APIservice();
const refs = getRefs();
const QUEUE_KEY = 'QueueFilms';
const WATCHED_KEY = 'WatchedFilms';

const libraryBtnRef= document.querySelector('button[data-page="library"]')
const homeBtn = document.querySelector('button[data-page="home"]')
const searchFormRef = document.querySelector('.search-form')
const containerRef = document.querySelector('.container')

refs.queueBtn.style.display = 'none'
refs.watchedBtn.style.display = 'none'


libraryBtnRef.addEventListener('click', openLib);
async function openLib() {
  refs.gallery.innerHTML = ''
  refs.queueBtn.style.display = 'inline-flex'
  refs.watchedBtn.style.display = 'inline-flex'
  searchFormRef.style.display = 'none'
  instance.setTotalItems(WATCHED_KEY);
  instance.reset();
  try {
    if (localStorage.getItem(WATCHED_KEY) === null) {
      // refs.gallery.innerHTML = ''
      const message = document.createElement('p')
      message.classList.add('bgImageLid')
      message.textContent = "You haven't added movies yet. Please make your choise first";
      message.style.display = 'block'
       message.style.textAlign = 'center'
      refs.gallery.before(message)
      return
    }else{
      JSON.parse(localStorage.getItem(WATCHED_KEY))
    }
  } catch (error) {
    console.error(message);
  }
  const moviesId = JSON.parse(localStorage.getItem(WATCHED_KEY));
  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    const results = response.data.results;
    const arrGenreId = results.map(item => item.genre_ids);
    const genreResponse = await API.getMoveGanres();
    const arrGenre = genreResponse.data.genres;
    for (const id of moviesId) {
      const moveId = results.filter(item => item.id == id);
      replaceIdtoGenre(arrGenre, arrGenreId);
      instance.setTotalItems(WATCHED_KEY);
      instance.reset();
      renderMarkup(moveId);
    }
  } catch (error) {
    // console.log(error);
  }
}
// перезагрузка страницы.
homeBtn.addEventListener('click', goToHomePage)

function goToHomePage(){
    // refs.gallery.innerHTML = ''
    // refs.queueBtn.style.display = 'none'
    // refs.watchedBtn.style.display = 'none'
    // searchFormRef.style.display = 'inline-block'
    location. reload()
    
}



