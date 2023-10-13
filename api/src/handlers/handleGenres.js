const { getGenre } = require('../controllers/getGenres');
async function handleGenres(req, res) {
    try {
        const byGenres = await getGenre();
        res.status(200).json(byGenres);
    } catch (error) {
        res.status(400).json('Error: no se ha encontrado información')
    }
};

module.exports = { handleGenres };