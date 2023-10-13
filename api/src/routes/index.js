const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gamesRoutes  = require('./videogamesRoutes.js');
const genresRoutes  = require('./genresRoutes.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRoutes);
router.use('/genres', genresRoutes);


module.exports = router;
