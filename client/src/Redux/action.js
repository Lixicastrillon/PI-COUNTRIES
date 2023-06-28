import axios from "axios";

export const getCountries = () => {
  // la funcion retorna un cb // get - solicito todos los paises
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      console.log(data);
      return dispatch({
        type: "GET_COUNTRIES",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const onSearch = (Nombre) => {
  // solicito pais por nombre
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries?Nombre=${Nombre}`
      );
      return dispatch({
        type: "SEARCH_COUNTRY",
        payload: data,
      });
    } catch (error) {
      alert("No se encontró ningún país con ese nombre");
      console.log(error.message);
    }
  };
};

export const getcountriesId = (ID) => {
  //busco pais por ID
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries/${ID}`);
      return dispatch({
        type: "GET_ID_COUNTRY",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCard = (Continente) => {
  //filtrado por continente 
  return {
    type: "FILTER_CARDS",
    payload: Continente,
  };
};

export const getCountriesList = () => {
  // solicitar ID y nombre de paises
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries/list");
      return dispatch({
        type: "GET_COUNTRIES_LIST",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


