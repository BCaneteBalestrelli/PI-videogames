const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { infoOrganization } = require('../utils/infoOrganization');

const getDBInfo = async (id) => {
  try {
    const dbInfo = await Videogame.findByPk(id, {
      include: Genre, // Incluye la relación con Genre
    });
    if (dbInfo) {
      const videogameData = infoOrganization(dbInfo);
      return videogameData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener información de la base de datos');
  }
};

const getAPIInfo = async (id) => {
  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${id}?api_key=${API_KEY}`);
    const apiInfo = apiResponse.data;
    if (apiInfo) {
      const apiVideogameData = infoOrganization(apiInfo);
      return apiVideogameData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener información de la API');
  }
};

const videogameById = async (id) => {
  try {
    const dbInfo = await getDBInfo(id);
    if (dbInfo) {
      return [dbInfo];
    } else {
      const apiInfo = await getAPIInfo(id);
      if (apiInfo) {
        return [apiInfo];
      } else {
        return null;
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener información del videojuego');
  }
};

module.exports = { videogameById };


