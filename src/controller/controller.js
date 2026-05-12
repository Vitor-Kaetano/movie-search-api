import { list, search } from '../models/apiClient.js'

function extractFilters(query) {
  const { language, with_genres, vote_average, year } = query
  const filters = {}
  if (language) filters.language = language
  if (with_genres) filters.with_genres = with_genres
  if (vote_average) filters.vote_average = vote_average
  if (year) filters.year = year
  return filters
}

export async function getMovies(req, res) {
  try {
    const filters = extractFilters(req.query)
    const results = await list('movie', filters)
    res.json(results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function searchMovies(req, res) {
  const q = req.query.query
  if (!q) return res.status(400).json({ error: 'Missing query parameter' })
  try {
    const filters = extractFilters(req.query)
    const results = await search('movie', q, filters)
    res.json(results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function getTvShows(req, res) {
  try {
    const filters = extractFilters(req.query)
    const results = await list('tv', filters)
    res.json(results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function searchTvShows(req, res) {
  const q = req.query.query
  if (!q) return res.status(400).json({ error: 'Missing query parameter' })
  try {
    const filters = extractFilters(req.query)
    const results = await search('tv', q, filters)
    res.json(results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
