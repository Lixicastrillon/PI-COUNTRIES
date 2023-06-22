const { Country } = require("../db");

const getCountriesList = async (req, res) => {// solicitar los ID Y NOMBRES DEL MODELO COUNTRIES
  try {
      const findCountriesList = await Country.findAll({
        attributes:["ID","Nombre"]
      })
      return res.status(200).json(findCountriesList)
  
  }catch (error) {
    return res.status(501).send(error.message)
}
}
module.exports = getCountriesList;
