import express from 'express'
import {
  getMovies,
  searchMovies,
  getTvShows,
  searchTvShows,
} from '../controller/controller.js'

const router = express.Router()

router.get('/movies', getMovies)
router.get('/movies/search', searchMovies)

router.get('/tv', getTvShows)
router.get('/tv/search', searchTvShows)

export default router
