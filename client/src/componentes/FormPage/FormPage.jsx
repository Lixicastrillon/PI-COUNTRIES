import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import { getCountriesList } from "../../Redux/action";


const FormPage = () => {
  const [activity, setActivity] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: 0,
    Temporada: "",
    ID:[],
  });
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCountriesList())
  },[])

  const listCountries = useSelector((state)=>state.listCountries)

  const handleInputChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectCountries = (event)=>{
    const optionsSelected = event.target.options.filter((arg)=> arg.selected);
    console.log(optionsSelected)

    // const selectedCrew = event.map(crew => crew.target.value);

    // setActivity({
    //   ...activity,
    //   ID:selectedCrew // es el valor del input
    // })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(activity);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Name of the activity</label>
        <input
          type="text"
          name="Nombre"
          value={activity.Nombre}
          required
          onkeydown="return /[a-z]/i.test(event.key)"//validar solo letras
          onChange={handleInputChange}
        ></input>

        <label htmlFor="Dificultad">Difficulty</label>
        <select
          type="number"
          name="Dificultad"
          value={activity.Dificultad}
          required
          onChange={handleInputChange}>
          <option value="" selected disabled>Select</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
        </select>
        

        <label htmlFor="Duracion">Duration in hours</label>
        <input
          type="number"
          name="Duracion"
          value={activity.Duracion}
          onChange={handleInputChange}
          min="1"
        ></input>

        <label htmlFor="Temporada">Season</label>
        <select
          name="Temporada"
          value={activity.Temporada}
          required
          onChange={handleInputChange}
        >
          <option value="" selected disabled>Select</option>
          <option value="Summer" >Summer</option>
          <option value="winter">winter</option>
          <option value="autumn">autumn</option>
          <option value="Spring">Spring</option>
        </select>

        <label htmlFor="ID">select the countries</label>
        <select
          type="text"
          name="ID"
          required
          onChange={handleSelectCountries}
          multiple
        >
          // i ubicación del arg
          {listCountries && listCountries.map((arg , i)=><option  key={i}value={arg.ID}>{arg.Nombre}</option>)}
        </select>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormPage;
