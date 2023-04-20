import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5257856f789bada50296aabdc3a8b8f3';

class ApiClient {
    static page = 1
    static searchQuery = ''

    // Запит на список найпопулярніших
    async getMoveTrending() {
        try {
            const fetchLink = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${ApiClient.page}`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure(`Sorry. Please try again.`);
        }
    }

    // Запит на список для слайдера
    async getMoveSwiper() {
        try {
            const fetchLink = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${3}`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure(`Sorry. Please try again.`);
        }
    }
    
    // Запит за ключовим словом
    async getMoveName() {
        try {
            const fetchLink = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${ApiClient.page}&query=${ApiClient.searchQuery}`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure(`Sorry. Please try again.`);
        }
    }

    // Запит за інформації про фільм по ID
    async getMoveInfo(moveId) {
        try {
            const fetchLink = `${BASE_URL}movie/${moveId}?api_key=${API_KEY}&language=en-US`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure('Oops, an error occurred');
        }
    }

    // Запит на отримання відео/трейлера по ID
    async getMoveVideo(moveId) {
        try {
            const fetchLink = `${BASE_URL}movie/${moveId}/videos?api_key=${API_KEY}&language=en-US`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure('Oops, an error occurred');
        }
    }
    
    // Запит на масив об'єктів жанрів
    async getMoveGanres() {
        try {
            const fetchLink = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=${ApiClient.page}`;
            const response = await axios.get(fetchLink);
            return response;
        } catch (error) {
            Notify.failure('Oops, an error occurred');
        }
    }

    set query(newQuery) {
        ApiClient.page = 1;
        ApiClient.searchQuery = newQuery;
    }

    get query() {
        return ApiClient.searchQuery;
    }

    set page(page) {

        ApiClient.page = page;
    }

    get page() {
        return ApiClient.page;
    }

    incrementPage() {
        ApiClient.page += 1;
    }

    decrementPage() {
        ApiClient.page -= 1;
    }

    resetPage() {
        ApiClient.page = 1;
    }

}

export default ApiClient;