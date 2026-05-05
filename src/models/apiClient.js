import {Movie, Tvshow} from './classes.js'


const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI4YTU3YjAwNzdmOTdhYjdhZDBmY2I3NTBlYzBlNiIsIm5iZiI6MTc3NzkxOTczNi4xNDQsInN1YiI6IjY5ZjhlNmY4MjMxOGNhMWNkYWRlNGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sp-OkixO_-lxQOYGGxpXb9lXIge0IltbxUQ9fjSEAtQ';

const API_ENDPOINTS = {
  discover: (type) => `https://api.themoviedb.org/3/discover/${type}?include_adult=false&language=en-US&page=1&sort_by=popularity.desc`,
  search:   (type, query) => `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(query)}`,
};

async function fetchFromAPI(url) {
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
async function list(type = 'movie') {
  try {
    const results = await fetchFromAPI(API_ENDPOINTS.discover(type));
    return type === 'movie'
      ? results.map(item => new Movie(item))    // 👈 passa o objeto inteiro
      : results.map(item => new TvShow(item));  // 👈 idem
  } catch (error) {
    console.error(`Erro ao listar ${type}:`, error);
  }
}

async function search(query, type = 'movie') {
  try {
    return await fetchFromAPI(API_ENDPOINTS.search(type, query));
  } catch (error) {
    console.error(`Erro ao buscar ${type}:`, error);
  }
}

// Uso:
//list('movie');    // filmes populares
//list('tv');       // séries populares

search('Batman');        // busca filme (padrão)
search('Breaking Bad', 'tv');  // busca série

