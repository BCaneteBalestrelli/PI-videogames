const { videogameByName } = require('../controllers/getByName')
async function handleByName(req, res) {
    const { name } = req.query;
    try {
        const ByName = await videogameByName(name);
        res.status(200).json(ByName);
    } catch (error) {
        res.status(404).json('No se encontró ningun videojuego con ese nombre')
    }
};

module.exports = { handleByName };