const { getVideogames } = require('../controllers/getVideogames');

async function handleVideogames(req, res) {
    try {
        const videogames = await getVideogames();
        res.status(200).json(videogames)
    } catch (error) {
        res.status(400).json('No se han podido encontrar videojuegos')
    }
};


module.exports = { handleVideogames };