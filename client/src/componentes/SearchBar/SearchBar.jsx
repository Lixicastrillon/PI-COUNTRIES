import React, { useState } from "react";
import { useDispatch} from "react-redux"
import { onSearch } from "../../Redux/action";



const SearchBar = () => {
  const dispatch = useDispatch()
  const [Nombre, setNombre] = useState("");
  const handleChange = (Nombre) => {
    setNombre(Nombre.target.value);
  };
  return (
    <div> 
       <form className="d-flex" role="search">
      <input
        type="search"
        placeholder="Nombre del país"
        onChange={handleChange}
        className="form-control me-2"
        ></input>
      <button  className="btn btn-outline-success" onClick={(e) => {e.preventDefault();dispatch(onSearch(Nombre))}}>Buscar</button>
      </form>
    </div>
  );

  
}

export default SearchBar;
