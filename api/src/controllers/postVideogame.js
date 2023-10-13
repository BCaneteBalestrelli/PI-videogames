const { Videogame, Genre } = require('../db');

const postCreation = async (req, res) => {
  const { name, description, platforms, image, launching_date, rating, genre } = req.body;

  try {
    // Paso 1: Parsear géneros recibidos en el cuerpo de la solicitud
    const genresArray = genre.split(',').map((genreName) => genreName.trim()); // Suponemos que los géneros se reciben como una cadena separada por comas

    // Paso 2: Crear el videojuego en la base de datos
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      launching_date,
      rating,
      genre,
    });

    // Paso 3: Asociar los géneros al videojuego
    const associatedGenres = await Genre.findAll({
      where: {
        name: genresArray,
      },
    });

    // Asociar los géneros al videojuego
    await newVideogame.addGenres(associatedGenres);

    if (newVideogame) {
      res.status(201).json('Se ha creado el videojuego con éxito');
    } else {
      res.status(400).json('No se ha logrado crear el videojuego');
    }
  } catch (error) {
    console.error(error);
    res.status(400).json('Error al crear el videojuego');
  }
};

module.exports = { postCreation };

