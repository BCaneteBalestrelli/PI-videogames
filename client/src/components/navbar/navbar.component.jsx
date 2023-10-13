import GenderFilter from "../genderFilter/genderFilter.component";
import Searchbar from "../searchbar/searchbar.component";
import {orderVideogamesAscDesc, orderVideogamesByRating} from '../../redux/actions/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import {  useState } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.module.css';
function Navbar(){ 
    const dispatch = useDispatch();

    
    
    // Estados iniciales
    const [aux, setAux] = useState(false);
    const handleOrderAscDesc = (e) => {
      e.preventDefault();
      dispatch(orderVideogamesAscDesc(e.target.value))
      setAux(!aux)
    }
    
    const handleOrderByRating = (e) => {
      e.preventDefault();
      dispatch(orderVideogamesByRating(e.target.value))
      setAux(!aux)
    }
    
    function handleButtonReset (e) {
      setTimeout(function() {
      window.location.reload()
         }, 500) 
    }
    
    return (
      <div className="navbar-container">
            <Searchbar/>,
            <GenderFilter/>,
            <div className="orderAsc-container">
             <select onChange={(e)=> handleOrderAscDesc(e)}>
               <option value="default" >Select by order</option>
               <option value="asc" >Ascendent</option>
               <option value="desc">Descendent</option>
             </select>
           </div>
           <div className="orderBy-container">
             <select onChange={(e)=> handleOrderByRating(e)}>
               <option value="default" >Select by rating</option>
               <option value="best" >Best</option>
               <option value="worst">Worst</option>
             </select>
           </div>
         <button className="formButton-container">
             <NavLink to="/form">Create game</NavLink>
          </button>
           <button onClick={(e) => handleButtonReset()} className="reset-button">Reset Filters</button>
        </div>
     
    )
}


export default Navbar;