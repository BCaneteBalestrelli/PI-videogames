import './card.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Card(props) {
  const id = props.id;
  return (
    <div className='card-container'>
      <div>
        <img src={props.image} alt='' />
      </div>

      <div >
        <NavLink to={`/detail/${id}`}>
          <h3>{props.name}</h3>
        </NavLink>
      </div>

      <div>
        <p>Genres: {props.genres}</p>
        <p>Rating: {props.rating}</p>
      </div>

    </div>
  )
}

export default Card;