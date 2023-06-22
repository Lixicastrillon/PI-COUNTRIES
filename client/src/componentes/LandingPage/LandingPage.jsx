import {Link} from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <h1>Bienvenidos al mundo virtual!!</h1>
      <Link to="/home"><button>Click para ingresar</button></Link>
    </div>
  );
};

export default LandingPage;
