import getRefs from './refs.js';
import APIservice from './fetch-API.js';
import { renderMarkup } from './renderMarkup.js';

const refs = getRefs();
const API = new APIservice();

export async function popularMovies() {
  try {
    const data = await API.getMoveTrending();
    const results = data.data.results;
    const arrGenreId = results.map(item => item.genre_ids);

    const genreResponse = await API.getMoveGanres();
    const arrGenre = genreResponse.data.genres;

    replaceIdtoGenre(arrGenre, arrGenreId);
    renderMarkup(results);

    console.log(results);
    // console.log(arrGenreId);
  } catch (error) {
    console.log(error);
  }
}

// Функція для заміни id на його назву жанра
function replaceIdtoGenre(arrGenre, arrGenreId) {
  arrGenreId.forEach(item => {
    for (let i = 0; i < item.length; i += 1) {
      for (let j = 0; j < arrGenre.length; j += 1) {
        item[i] === arrGenre[j].id ? (item[i] = arrGenre[j].name) : item[i];
      }
    }
  });
}
