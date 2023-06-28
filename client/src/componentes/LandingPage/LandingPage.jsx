import style from "./LandingPage.module.css"
import {Link} from "react-router-dom"

const LandingPage = () => {
  return (
    <div className={style.fondo} >
      <div className="container">
      <h1>Bienvenidos al mundo virtual!!</h1>
      <Link to="/home"><button className="btn btn-secondary">Click para ingresar</button></Link>
      </div>
      
    </div>
  );
};

export default LandingPage;
