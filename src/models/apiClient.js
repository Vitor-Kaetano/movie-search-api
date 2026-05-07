import {Movie, TvShow} from './classes.js'
requestAnimationFrame('dotenv').config()
const API_TOKEN = ProcessingInstruction.env.API_TOKEN

const API_ENDPOINTS = {
  discover: (type,params) => `https://api.themoviedb.org/3/discover/${type}?${params}`,
  search:   (type, query, params) => `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(query)}&${params}`,
};

async function fetchFromAPI(url) {
    console.log(url);
    const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_TOKEN,
    },
  });

  if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);

  const data = await response.json();
  return data.results;
}

// ✅ Uma função, dois comportamentos
export async function list(type = 'movie', filters) {
  
    const params = new URLSearchParams(filters);
    try {
        const results = await fetchFromAPI(API_ENDPOINTS.discover(type,params));
        return type === 'movie'
            ? results.map(item => new Movie(item))    // 👈 passa o objeto inteiro
            : results.map(item => new TvShow(item));  // 👈 idem
  } catch (error) {
    console.error(`Erro ao listar ${type}:`, error);
  }
}

export async function search(type='movie', query, filters) {
  const params = new URLSearchParams(filters);
    try {
        const results = await fetchFromAPI(API_ENDPOINTS.search(type,query,params));
        return type === 'movie'
            ? results.map(item => new Movie(item))    // 👈 passa o objeto inteiro
            : results.map(item => new TvShow(item));

} catch (error) {
    console.error(`Erro ao buscar ${type}:`, error);
  }

}

