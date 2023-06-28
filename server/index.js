const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {Country,Activity,Country_Activity} = require("./src/db")
const URL = "http://localhost:5000/countries"
const PORT = 3001;



conn.sync({ force: true }).then(async() => {

  const  countries = await axios.get(URL)
  let paises = []
  countries.data.forEach( pais => {

    let infoPais = {
    ID: pais.cca3,
    Nombre: pais.name.official,
    ImagenDeLaBandera: pais.flags.png,
    Continente: pais.continents [0],
    Capital: pais.capital?pais.capital[0]:"Desconocido",
    Subregion: pais.subregion,
    Area: pais.area,
    Poblacion: pais.population
    }
  paises.push(infoPais)
});
  await Country.bulkCreate(paises)// crear varios registros 

const colombia = await Country.findByPk("COL")

  const createdActivity = await Activity.create({
    Nombre:"CharcoAzul",
    Dificultad:3,
    Duracion:4,
    Temporada:"Summer",
  })
createdActivity.addCountry(colombia)

//colombia.addActivity(createdActivity)
  

  //await paises_actividadesTuristicas.create({PaiseID:"COL", ActividadesTuristicaID:1})
  
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
