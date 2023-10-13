const { Router } = require('express');
const { handleVideogames } = require('../handlers/handleVideogame');
const { handleById } = require('../handlers/handleById');
const { handleByName } = require('../handlers/handleByName');
const { handleCreation } = require('../handlers/handleCreation');

const gamesRouter = Router();
gamesRouter.get('/:id', handleById);
gamesRouter.get('/name', handleByName);
gamesRouter.get('/', handleVideogames);
gamesRouter.post('/', handleCreation);

module.exports = gamesRouter;