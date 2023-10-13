const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, // en caso que no tome la descripción
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "Unknown",
      allowNull: true,
    },
 launching_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: "Unknown"
    }
  });
};
