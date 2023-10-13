const { Videogame } = require('../db');
const axios = require('axios');
const apiKey = process.env.API_KEY;
require('dotenv').config();
const { infoOrganization } = require('../utils/infoOrganization');

const getDBInfo = async (req, res) => {
  try {
    const dbInfo = await Videogame.findAll();
    if (dbInfo && dbInfo.length > 0) {
      const videogames = infoOrganization(dbInfo);
      res.status(200).json(videogames);
    } else {
      res.status(404).json({ error: 'No se encontraron videojuegos en la base de datos' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAPIInfo = async (req, res) => {
  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);

    const apiInfo = apiResponse.data.results;
    console.log("Info de getVideogames" , apiInfo)
    if (apiInfo && apiInfo.length > 0) {
      const apiVideogames = infoOrganization(apiInfo);
      res.status(200).json(apiVideogames);
    } else {
      res.status(404).json({ error: 'No se encontraron videojuegos en la API' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVideogames = async (req, res) => {
  try {
    const dbInfo = await getDBInfo();
    const apiInfo = await getAPIInfo();
    const allVideogames = [...dbInfo, ...apiInfo];
    res.status(200).json(allVideogames);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getVideogames };


