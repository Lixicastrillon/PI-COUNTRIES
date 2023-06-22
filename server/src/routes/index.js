const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getIdCountries = require ("../controllers/getIdCountries")
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");
const getCountriesList=require("../controllers/getCountriesList")


const router = Router();

router.get("/countries",getCountries)
router.get("/countries/list",getCountriesList)
router.get("/countries/:idPais",getIdCountries)
router.post("/activities",postActivities)
router.get("/activities",getActivities)



module.exports = router;
