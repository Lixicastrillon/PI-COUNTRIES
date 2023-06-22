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
      <input
        type="search"
        placeholder="Nombre del país"
        onChange={handleChange}
        ></input>
      <button onClick={() => dispatch(onSearch(Nombre))}>Buscar</button>
    </div>
  );

  
}

export default SearchBar;
