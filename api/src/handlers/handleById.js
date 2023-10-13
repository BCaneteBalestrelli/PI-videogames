const { videogameById } = require('../controllers/getById')

async function handleById(req, res) {
    const { id } = req.params
    try {
        const videoGame = await videogameById(id);
        res.status(200).json(videoGame);
    } catch (error) {
        res.status(404).json('No se encontró el Videogame Solicitado')
    }
};

module.exports = { handleById };
