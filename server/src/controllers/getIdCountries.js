const { Country, Activity} = require("../db");

const getIdCountries = async (req, res) => {
  try {
    const { idPais } = req.params;
    if (idPais.length === 3 && idPais.toUpperCase() === idPais) {
      const returnCountry = await Country.findOne(
        {
          where:{ID:idPais},
          include: {
            model: Activity,
            attributes: ["Nombre", "Dificultad", "Duracion", "Temporada"],
            through:{
              attributes: []
            }
          },
        },
      );

      if (!returnCountry) {
        return res.status(404).send("País no encontrado");
      }
      return res.status(200).json(returnCountry);
    } else {
     return res.status(404).send("ID INVALIDO");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getIdCountries;
