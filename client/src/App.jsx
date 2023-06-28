import "./App.css";
import { Routes, Route ,  useLocation} from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage";
import NavBar from "./componentes/NavBar/NavBar";
import Cards from "./componentes/Cards/Cards";
import { useSelector, useDispatch} from "react-redux"
import {getCountries} from "./Redux/action";
import {useEffect } from "react";
import DetailPage from "./componentes/DetailPage/DetailPage";
import FormPage from "./componentes/FormPage/FormPage";


function App() {
  const countries = useSelector((state)=>state.countries)
  const {pathname} = useLocation()

const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(getCountries())
 },[])



  return (
    <div>
      {pathname !== "/" && pathname === "/home" && <NavBar/> }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Cards data={countries}/>} />
        <Route path="/detail-page/:ID" element={<DetailPage/>}/>
        <Route path="/form-page" element={<FormPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
