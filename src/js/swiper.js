import APIservice from './fetch-API.js';
import { renderModalFilms } from './modalFilms.js';

const API = new APIservice();

const swiperContent = document.querySelector('.swiper-wrapper');
swiperContent.addEventListener('click', openFilm)

export async function openFilm(event) {

    try {
        event.preventDefault();
        const moveId = event.target.closest('.swiper-slide').dataset.id;
        const response = await API.getMoveInfo(moveId)
        const data = response.data;
        renderModalFilms(data);
    } catch (error) {
        console.log(error);
    }
}

swipeMove();

async function swipeMove() {
    try {
        const data = await API.getMoveSwiper();
        const results = data.data.results;
        renderSwipe(results);
    } catch (error) {
        console.log(error);
    }
}

function renderSwipe(results) {
    const markupSwiper = results
        .map(({ poster_path, title, id }) => {
            return `<div class="swiper-slide" data-id="${id}">           
    <a href="${checkedImg(poster_path)}" class="swiper-link">
      <div class="swiper-card">
        <img class="swiper-photo" src="${checkedImg(poster_path)}" width="220" height="320" alt="${title}" loading="lazy" />
      </div>
      <div class="swiper-info">
        <h2 class="swiper-title">${title}</h2>
      </div>
    </a>
    </div>`}).join('');
    swiperContent.insertAdjacentHTML('beforeend', markupSwiper);

}


// Перевірка фото
const checkedImg = url =>
    `${!url
        ? `https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg`
        : `https://image.tmdb.org/t/p/w500${url}`
    }`;


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    lazy: true,

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});