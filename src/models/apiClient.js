import {Movie, TvShow} from './classes.js'



const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI4YTU3YjAwNzdmOTdhYjdhZDBmY2I3NTBlYzBlNiIsIm5iZiI6MTc3NzkxOTczNi4xNDQsInN1YiI6IjY5ZjhlNmY4MjMxOGNhMWNkYWRlNGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sp-OkixO_-lxQOYGGxpXb9lXIge0IltbxUQ9fjSEAtQ';

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

