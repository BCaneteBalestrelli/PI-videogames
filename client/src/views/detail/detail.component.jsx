import Card from '../../components/card/card.component.jsx';
import './detail.module.css';
import { useSelector } from "react-redux";
function Detail() {
  const Videogames = useSelector((state) => state.Videogames);
  
  return (
    <div className='cards-container'>
      {
     Videogames.map((game) => {
          return (
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

export default Detail;