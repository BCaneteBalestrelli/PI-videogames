const { Videogame } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize'); // Importa Op para operadores de Sequelize
const { API_KEY } = process.env;
require('dotenv').config();


const getDBInfo = async (name) => {
  try {
    const dbInfo = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, // Busca el nombre que contiene la palabra (case-insensitive)
        },
      },
      limit: 15, // Limita a 15 resultados
    });

    if (dbInfo) {
      const videogames = dbInfo.map((info) => infoOrganization(info));
      return videogames;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al buscar en la base de datos');
  }
};

const getAPIInfo = async (name) => {
  let game = name; 
  try {
    const apiInfo = (await axios.get(`https://api.rawg.io/api/games?search=${game}&api_key=${API_KEY}`)).data;

    if (apiInfo) {
      const organizedApiVideogames = apiInfo.map((info) => infoOrganization(info));
      return organizedApiVideogames;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al buscar en la API');
  }
};

const videogameByName = async (req, res) => {
  const { name } = req.query;

  try {
    const dbInfo = await getDBInfo(name);
    const apiInfo = await getAPIInfo(name);

    const combinedInfo = [...dbInfo, ...apiInfo];

    if (combinedInfo.length > 0) {
      res.json(combinedInfo);
    } else {
      res.status(404).json({ error: 'No se encontraron videojuegos con ese nombre.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar videojuegos.' });
  }
};

module.exports = {
  videogameByName,
};
