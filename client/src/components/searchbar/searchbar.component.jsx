import React from 'react';
import './searchbar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogames } from '../../redux/actions/actions';

function Searchbar() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');

  //guardo el estado de lo que me pasan por input
  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(searchVideogames(name))
    setName('')
  }
  
  return (
    <div >
      <input onChange={(e)=>handleInputChange(e)} 
        type="search" 
        placeholder="Insert game name"
        value={name}
      />
      <button type="submit" onClick={(e)=>handleSubmitSearch(e)} >
        <span>Find game</span>
      </button>
    </div>
  )
}

export default Searchbar;