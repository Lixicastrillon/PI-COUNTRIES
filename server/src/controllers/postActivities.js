const { Activity, Country } = require("../db");

const postActivities = async (req, res) => {
  try {
    const { Nombre, Dificultad, Duracion, Temporada, ID} = req.body;

    if (!Nombre || !Dificultad || !Temporada || !ID.length) {
      return res.status(400).send("Faltan datos por favor llene los campos obligatorios");
    }
    let countrySaved = await Promise.all(ID.map(async (pais) => { // sirve para que .map funcione de forma asincrona
      return await Country.findByPk(pais)
    }));

    if (!countrySaved.length) {
      return res.status(400).send("El país no existe");
    }
    const createdActivity = await Activity.create({
      Nombre,
      Dificultad,
      Duracion,
      Temporada,
    });

    countrySaved.forEach((pais)=>{createdActivity.addCountry(pais);
    })
    return res.status(200).json(createdActivity);

  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = postActivities;
