import {Link} from "react-router-dom"


const Card = (data)=> {

  return(
    <div className="card mb-3" style={{"width": "18rem"}}>
    <img className="card-img-top" src={data.ImagenDeLaBandera.toString()} />
    <div className="card-body">
      <Link to={`/detail-page/${data.ID}`}>
      <h4 className="card-title" >{data.Nombre && data.Nombre}</h4>
      </Link>
   
    <h3 > {data.Continente && data.Continente }</h3>
    </div>
    </div>
    )
}
 
export default Card






