import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getVideogames} from '../../redux/actions/actions';
import Pagination from '../../components/pagination/pagination.component';
import './home.module.css';
import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component';


function Home () {
  const dispatch = useDispatch();

  
  const allVideogames = useSelector((state) => state.Videogames)
   const numPage = useSelector((state) => state.numPage);
  
  const [gamesPerPage] = useState(15);
  //obtener el indice del ultimo game
   const indexOfLastGame = numPage * gamesPerPage;
  
  //obtener el indice del primer game
   const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  
  //obtener el corte de los games por pagina
   const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);
  // Se instancia el estado al cual se está pendiente
  
  

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])


  
return (
  <div className='home-container'>
    <Navbar/>
    <Cards currentGames={currentGames}/>
      <div className='bottom-container'>
        <Pagination 
          gamesPerPage={gamesPerPage} /* juegos por paginas */
          allVideogames={allVideogames.length} /* todos los juegos */
        />
      </div>
      
  </div>
)


}


export default Home;