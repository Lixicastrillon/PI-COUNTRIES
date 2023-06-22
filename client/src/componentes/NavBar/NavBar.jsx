import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"

const NavBar = ()=>{
    return(
        <div>
           <SearchBar/>
           <Link to="/form-page"><button>Create tourist activity</button></Link>
        </div>
    )




}


export default NavBar;