import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';
import {replaceIdtoGenre} from './popularMovies.js'


const API = new APIservice();
const refs = getRefs();
const QUEUE_KEY = 'QueueFilms';
const WATCHED_KEY = 'WatchedFilms';

const libraryBtnRef= document.querySelector('button[data-page="library"]')
const homeBtn = document.querySelector('button[data-page="home"]')
const searchFormRef = document.querySelector('.search-form')

refs.queueBtn.style.display = 'none'
refs.watchedBtn.style.display = 'none'


libraryBtnRef.addEventListener('click', openLib);

async function openLib() {
    refs.gallery.innerHTML = ''
    refs.queueBtn.style.display = 'inline-flex'
    refs.watchedBtn.style.display = 'inline-flex'
    searchFormRef.style.display = 'none'
try{
    if (localStorage.getItem(WATCHED_KEY) === null&&localStorage.getItem(QUEUE_KEY) === null) {
        refs.gallery.innerHTML = ''
    }else{
        JSON.parse(localStorage.getItem(WATCHED_KEY))
        JSON.parse(localStorage.getItem(QUEUE_KEY))
    }
}catch (error) {
    console.error(message);
  }
  const WatcheMoviesId = JSON.parse(localStorage.getItem(WATCHED_KEY));
  const QueueMoviesId = JSON.parse(localStorage.getItem(QUEUE_KEY));
  const moviesId = WatcheMoviesId.concat(QueueMoviesId)
console.log(WatcheMoviesId);
  // console.log(QueueMoviesId);
  // console.log(moviesId);
  try {
    const response = await API.getMoveTrending();
    refs.gallery.innerHTML = '';
    console.log(response.data.results);
    const results = response.data.results;
    const arrGenreId = results.map(item => item.genre_ids);
// console.log(arrGenreId);
const genreResponse = await API.getMoveGanres();
    const arrGenre = genreResponse.data.genres;

    // console.log(arrGenre);
    for (const id of moviesId) {
      // console.log(id);
      const moveId = results.filter(item => item.id == id);
      replaceIdtoGenre(arrGenre, arrGenreId);
      renderMarkup(moveId);
    }
  } catch (error) {
    console.log(error);
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



