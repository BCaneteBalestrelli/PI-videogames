import React, { useState } from 'react';
import './form.module.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: '',
    launching_date: '',
    rating: '',
    genres: [], // Un arreglo para almacenar los géneros seleccionados
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      genres: selectedGenres,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una función o realizar la lógica necesaria
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className='form-container' >
      <h2 className='form-title'>CREATE VIDEOGAME</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='input-container'>
          <label>Imagen:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
        </div>
        <div className='input-container'>
          <label>Descripción:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className='input-container'>
          <label>Plataformas:</label>
          <input type="text" name="platforms" value={formData.platforms} onChange={handleChange} required />
        </div>
        <div className='input-container'>
          <label>Fecha de lanzamiento:</label>
          <input
            type="date"
            name="launching_date"
            value={formData.launching_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-container'>
          <label>Rating:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
        </div>
        <div className='input-container'>
          <label>Géneros:</label>
          <select
            multiple
            name="genres"
            value={formData.genres}
            onChange={handleGenreChange}
            required
          >
            {/* Aquí puedes mapear los géneros disponibles desde tu estado o API */}
            <option value="accion">Acción</option>
            <option value="aventura">Aventura</option>
            <option value="estrategia">Estrategia</option>
            
          </select>
        </div>
        <div className='button-container'>
          <button type="submit">Crear Videojuego</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
