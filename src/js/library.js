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


// libraryBtnRef.addEventListener('click', openLib);
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







const registerBtn = document.querySelector('#register-btn');
const registerModal = document.querySelector('#register-modal');
const registerForm = document.querySelector('#register-form');

// Открываем модальное окно при нажатии на кнопку
registerBtn.addEventListener('click', () => {
  registerModal.style.display = 'block';
});

// Закрываем модальное окно при нажатии на крестик или за его пределами
registerModal.addEventListener('click', (e) => {
  if (e.target == registerModal || e.target.classList.contains('close')) {
    registerModal.style.display = 'none';
  }
});

// Обрабатываем отправку формы
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение формы
  
  // Собираем данные из полей формы
  const userData = {
    username: document.querySelector('#username').value,
    email: document.querySelector('#email').value,
    password: document.querySelector('#password').value
  };
  
  // Вместо отправки на сервер можно здесь обработать данные формы
  console.log(userData);
  alert('Вы успешно зарегистрировались!');
  
  // Закрываем модальное окно
  registerModal.style.display = 'none';

  openLib();

});


// перезагрузка страницы.




// async function openLib() {
//     refs.gallery.innerHTML = ''
//     refs.queueBtn.style.display = 'inline-flex'
//     refs.watchedBtn.style.display = 'inline-flex'
//     searchFormRef.style.display = 'none'
// try{
//     if (localStorage.getItem(WATCHED_KEY) === null&&localStorage.getItem(QUEUE_KEY) === null) {
//         refs.gallery.innerHTML = ''
//     }else{
//         JSON.parse(localStorage.getItem(WATCHED_KEY))
//         JSON.parse(localStorage.getItem(QUEUE_KEY))
//     }
// }catch (error) {
//     console.error(message);
//   }
//   const WatcheMoviesId = JSON.parse(localStorage.getItem(WATCHED_KEY));
//   const QueueMoviesId = JSON.parse(localStorage.getItem(QUEUE_KEY));
//   const moviesId = WatcheMoviesId.concat(QueueMoviesId)
// console.log(WatcheMoviesId);
//   // console.log(QueueMoviesId);
//   // console.log(moviesId);
//   try {
//     const response = await API.getMoveTrending();
//     refs.gallery.innerHTML = '';
//     console.log(response.data.results);
//     const results = response.data.results;
//     const arrGenreId = results.map(item => item.genre_ids);
// // console.log(arrGenreId);
// const genreResponse = await API.getMoveGanres();
//     const arrGenre = genreResponse.data.genres;

//     // console.log(arrGenre);
//     for (const id of moviesId) {
//       // console.log(id);
//       const moveId = results.filter(item => item.id == id);
//       replaceIdtoGenre(arrGenre, arrGenreId);
//       renderMarkup(moveId);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// перезагрузка страницы.
homeBtn.addEventListener('click', goToHomePage)

function goToHomePage(){
    // refs.gallery.innerHTML = ''
    // refs.queueBtn.style.display = 'none'
    // refs.watchedBtn.style.display = 'none'
    // searchFormRef.style.display = 'inline-block'
    location. reload();}
    
