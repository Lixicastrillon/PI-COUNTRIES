import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { filterCard } from "../../Redux/action"


const NavBar = () => {

  const dispatch = useDispatch()
  const handleFilter = (event) => {
    dispatch(filterCard(event.target.value));
  };

 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
        <div>
        <SearchBar />
        </div>
        <div>
        <Link to="/form-page">
      <button className="btn btn-outline-success">Create tourist activity</button>
      </Link>
        </div>
        <div>
        <select onChange={handleFilter} className="form-select">
      <option className="btn btn-secondary">Filtered by continent</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
      </select>

        </div>
    
        </div>
    </nav>
  );
};

export default NavBar;
//<button>filtered by activity</button>
//<button>filtered by countries</button>