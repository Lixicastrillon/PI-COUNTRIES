import Card from "../Card/Card";

const Cards = ({data}) => {
    if(data.length){
        return(

            <div>
                { data.map((arg, i)=>(
                    <Card 
                    key={i}
                    ID={arg.ID}
                    Nombre={arg.Nombre}
                    ImagenDeLaBandera={arg.ImagenDeLaBandera}
                    Continente={arg.Continente}
                    
                    />
                ))}
            </div>
        )
    }


}

export default Cards;