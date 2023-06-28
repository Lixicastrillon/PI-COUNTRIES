import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesList } from "../../Redux/action";
import axios from "axios";

const FormPage = () => {
  const [activity, setActivity] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: 0,
    Temporada: "",
    ID: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesList());
  }, []);

  const listCountries = useSelector((state) => state.listCountries);

  const handleInputChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };
  const handleActiviCountries = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: [...activity.ID, event.target.value],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // previene comportamiento por default
    try {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      if (data) {
        alert("Activity created successfully");
      }
      setActivity({
        Nombre: "",
        Dificultad: "",
        Duracion: 0,
        Temporada: "",
        ID: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="Nombre">
            Name of the activity
          </label>
          <input
            className="form-control"
            type="text"
            name="Nombre"
            value={activity.Nombre}
            required
            onkeydown="return /[a-z]/i.test(event.key)" //validar solo letras
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="Dificultad">
            Difficulty
          </label>
          <select
          className="form-select"
            type="number"
            name="Dificultad"
            value={activity.Dificultad}
            required
            onChange={handleInputChange}
          >
            <option value="" selected disabled>
              Select
            </option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="Duracion">
            Duration in hours
          </label>
          <input
            className="form-control"
            type="number"
            name="Duracion"
            value={activity.Duracion}
            onChange={handleInputChange}
            min="1"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="Temporada">
            Season
          </label>
          <select
          className="form-select"
            name="Temporada"
            value={activity.Temporada}
            required
            onChange={handleInputChange}
          >
            <option value="" selected disabled>
              Select
            </option>
            <option value="Summer">Summer</option>
            <option value="Winter">winter</option>
            <option value="Autumn">autumn</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="ID">
            select the countries
          </label>
          <select 
          className="form-select"
            type="text"
            name="ID"
            required
            onChange={handleActiviCountries}
          >
            <option value="" selected disabled>
              Select
            </option>
            // i ubicación del arg
            {listCountries &&
              listCountries.map((arg, i) => (
                <option key={i} value={arg.ID}>
                  {arg.Nombre}
                </option>
              ))}
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
