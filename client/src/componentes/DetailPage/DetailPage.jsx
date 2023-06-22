import { useParams } from "react-router-dom";
import {getcountriesId } from "../../Redux/action"
import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";

const DetailPage = () => {
  const { ID } = useParams();
 
    const detail = useSelector((state)=> state.detail)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getcountriesId(ID))
      },[])

  return (
    <div>
      <h2>ID: {detail.ID && detail.ID}</h2>
      <h2>Name: {detail.Nombre && detail.Nombre}</h2>
      <img src={detail.ImagenDeLaBandera?.toString()} />
      <h2>Continent: {detail.Continente && detail.Continente}</h2>
      <h2>Capital: {detail.Capital && detail.Capital}</h2>
      <h2>Subregion: {detail.Subregion && detail.Subregion}</h2>
      <h2>Area :{detail.Area && detail.Area}</h2>
      <h2>Poblation: {detail.Poblacion && detail.Poblacion}</h2>
    </div>
  );
};

export default DetailPage;
