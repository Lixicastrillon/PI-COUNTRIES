const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activity = await Activity.findAll();
    return res.status(200).json(activity);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getActivities;
