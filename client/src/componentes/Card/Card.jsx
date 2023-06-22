import {Link} from "react-router-dom"

const Card = (data)=> {
   
  return(
    <div>
      <Link to={`/detail-page/${data.ID}`}>
      <h2 >{data.Nombre && data.Nombre}</h2>
      </Link>
   
    <h3 > {data.Continente && data.Continente }</h3>
    <img src={data.ImagenDeLaBandera.toString()} />
    </div>
    )
}
 
export default Card






