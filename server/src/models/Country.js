const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Country', {
    ID:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey:true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImagenDeLaBandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continente:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregion:{
      type: DataTypes.STRING,
    },
    Area:{
      type: DataTypes.DECIMAL,
    },
    Poblacion:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{ timestamps: false });
};