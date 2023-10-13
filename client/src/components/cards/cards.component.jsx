import './cards.module.css';
import React from 'react'
import Card from '../card/card.component'
import { useSelector } from 'react-redux';

function Cards() {
   // se fija el estado global de Videogames
   const allVideogames = useSelector(state => state.Videogames)
   return (
     <div >
       {
         allVideogames.map((game) => {
           return (
             // se mapea cada uno de los juegos para mostrarlos en el componente Card
             <Card 
               key={game.id}
               id={game.id}
               name={game.name}
               platforms={game.platforms}
               image={game.image}
               released={game.released}
               rating={game.rating}
               genres={game.genres}
             />
           )
         })
       }
     </div>
   )
}

export default Cards;