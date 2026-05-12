import { Movie, TvShow } from './classes.js'
import 'dotenv/config'

const API_TOKEN = process.env.TMDB_TOKEN
const API_BASE = 'https://api.themoviedb.org/3'

if (!API_TOKEN) console.warn('Warning: TMDB_TOKEN not set in environment')

async function fetchFromAPI(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(`TMDB request failed ${response.status} ${text}`)
  }

  const data = await response.json()
  return data.results || []
}

function buildParams(filters = {}) {
  const params = new URLSearchParams()
  if (filters.language) params.set('language', filters.language)
  if (filters.with_genres) params.set('with_genres', filters.with_genres)
  if (filters.vote_average) params.set('vote_average.gte', filters.vote_average)
  if (filters.year) {
    // TMDB uses `primary_release_year` for movies and `first_air_date_year` for tv discover
    if (filters.type === 'tv') params.set('first_air_date_year', filters.year)
    else params.set('primary_release_year', filters.year)
  }
  return params.toString()
}

export async function list(type = 'movie', filters = {}) {
  const params = buildParams(Object.assign({}, filters, { type }))
  const url = `${API_BASE}/discover/${type}?${params}`
  try {
    const results = await fetchFromAPI(url)
    return type === 'movie' ? results.map(r => new Movie(r)) : results.map(r => new TvShow(r))
  } catch (err) {
    console.error('Error in list():', err)
    throw err
  }
}

export async function search(type = 'movie', query = '', filters = {}) {
  const params = buildParams(Object.assign({}, filters, { type }))
  const q = encodeURIComponent(query || '')
  const url = `${API_BASE}/search/${type}?query=${q}${params ? `&${params}` : ''}`
  try {
    const results = await fetchFromAPI(url)
    return type === 'movie' ? results.map(r => new Movie(r)) : results.map(r => new TvShow(r))
  } catch (err) {
    console.error('Error in search():', err)
    throw err
  }
}

