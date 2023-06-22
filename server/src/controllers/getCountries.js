const { Country } = require("../db");
const {Op} = require("sequelize")

const getCountries = async (req, res) => {
  try {
    let { Nombre } = req.query;
    if(Nombre) {
      const findName = await Country.findAll({
        where :{
          Nombre:{
            [Op.iLike]: `%${Nombre}%`
          }
        }
      })
      if (!findName.length) {
        return res.status(404).send("El país no existe");
        } else {
        return res.status(200).json(findName);
      }
    } else {
      const paises = await Country.findAll();
      return res.status(200).json(paises);
    }
  } catch (error) {
    return res.status(501).send(error.message);
  }
};
module.exports = getCountries;
