import { useDispatch, useSelector } from "react-redux";
import { AllGenres, filterGenre} from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import './genderFilter.module.css';

const GenderFilter = () => {
  const [aux, setAux] = useState(false);

  const genres = useSelector(state => state.genres);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(AllGenres())
  }, [dispatch])

  const handleFilter = (event) => {
    dispatch(filterGenre(event.target.value))
    setAux(!aux);
  }

  return (
    <div className="genderFilter-container">

      <select onChange={(e)=> handleFilter(e)} defaultValue='default'>
        <option value="default" disabled >Filter by Genre</option>
        {
          genres?.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
        ))
        }
      </select>
    </div>
  );
};

export default GenderFilter;