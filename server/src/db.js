require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require("./models/Country")
const ActivityModel = require("./models/Activity")
const CountryActivityModel = require("./models/Country_Activity")
const fs = require('fs'); //file system - obtener info de un archivo
const path = require('path'); // saca las rutas de los archivos
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env; // importe datos desde el archivo .env
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false
});


const basename = path.basename(__filename);// ?
const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


//ejecutar la función de los modelos
CountryModel(sequelize)
ActivityModel(sequelize)
CountryActivityModel(sequelize)

const { Country, Activity,Country_Activity} = sequelize.models;

// Aca vendrian las relaciones de muchos a muchos
Country.belongsToMany(Activity,{through:Country_Activity});
Activity.belongsToMany(Country,{through:Country_Activity});

// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};