const { Router } = require('express');
const { handleGenres } = require('../handlers/handleGenres');
const genresRouter = Router();

genresRouter.get('/genres', handleGenres);

module.exports = genresRouter; 