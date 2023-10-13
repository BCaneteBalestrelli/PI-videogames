const { Genre } = require('../db');
const axios = require('axios'); // Cambio aquí, importa 'axios' correctamente
const { API_KEY } = process.env;
require('dotenv').config();

const getGenre = async (req, res) => {
  try {
    // Realiza una solicitud a la API para obtener los géneros
    const apiResponse = await axios.get(`https://api.rawg.io/api/genres?api_key=${API_KEY}`);
    const apiGenres = apiResponse.data.results;

    if (apiGenres && apiGenres.length > 0) {
      // Verifica si se obtuvieron géneros de la API

      // Mapea los géneros para extraer solo los nombres
      const genreNames = apiGenres.map((genre) => genre.name);

      // Verifica si ya hay géneros en la base de datos
      const existingGenres = await Genre.findAll();

      if (existingGenres && existingGenres.length === 0) {
        // Si la base de datos está vacía, crea los géneros desde la API
        const createdGenres = await Genre.bulkCreate(
          genreNames.map((name) => ({ name }))
        );
        
        res.status(200).json(createdGenres);
      } else {
        // Si la base de datos no está vacía, simplemente devuelve los géneros existentes
        res.status(200).json(existingGenres);
      }
    } else {
      res.status(400).json('No se pudo obtener la información solicitada de la API');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al obtener los géneros');
  }
};

module.exports = { getGenre };
