import { NavLink } from 'react-router-dom';
import './landing.module.css';


function Landing() {
  return (
    <div className='landing-container'>
      <img src="landing.jpg" alt='' className='image'/>
      <h1 className='landing-title'>Bienvenido a la app de Videojuegos</h1>
        <NavLink to='/home'>
      <button className='landing-button'>

       Entrar

      </button>     
        </NavLink>
    </div>
  );
}

export default Landing;