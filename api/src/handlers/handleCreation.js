const { postCreation } = require('../controllers/postVideogame')
async function handleCreation(req, res) {
    const { name, description, platforms, image, launching_date, rating, genre } = req.body;
    try {
        const videogameC = await postCreation(name, description, platforms, image, launching_date, rating, genre);
        res.status(201).json(videogameC);
    } catch (error) {
        res.status().json('Error: No se ha logrado crear el videojuego')
    }
}

module.exports = { handleCreation };