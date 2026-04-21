import axios from 'axios';

const API_KEY = 'bef10bcdebb648aaa06f40fc54def9ed';
const BASE_URL = 'https://api.rawg.io/api';

function mapGameData(game) {
  return {
    id: game.id,
    name: game.name,
    image: game.background_image,
    rating: game.rating || 0,
    ratingsCount: game.ratings_count || 0,
    genres: game.genres || [],
  };
}

export async function getPopularGames() {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        ordering: '-rating',
        page_size: 12,
      },
    });

    return response.data.results.map(mapGameData);
  } catch (error) {
    console.log('Erro ao buscar jogos populares');
    console.log(error);
    return [];
  }
}

export async function searchGames(name) {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        search: name,
        page_size: 12,
      },
    });

    return response.data.results.map(mapGameData);
  } catch (error) {
    console.log('Erro ao buscar jogos por nome');
    console.log(error);
    return [];
  }
}

export async function getGamesByGenre(genre) {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        genres: genre,
        page_size: 12,
      },
    });

    return response.data.results.map(mapGameData);
  } catch (error) {
    console.log('Erro ao buscar jogos por genero');
    console.log(error);
    return [];
  }
}
