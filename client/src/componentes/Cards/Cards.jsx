import style from "./Cards.module.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = ({ data }) => {
  const countries = useSelector((state) => state.countries);
  if (data.length) {
    return (
      <div className={style.paginado}>
        {countries.length &&
          countries.map((arg) => (
            <Card
              key={arg.ID}
              ID={arg.ID}
              Nombre={arg.Nombre}
              ImagenDeLaBandera={arg.ImagenDeLaBandera}
              Continente={arg.Continente}
            />
          ))}
      </div>
    );
  }
};

export default Cards;
