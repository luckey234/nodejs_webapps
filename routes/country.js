const express = require("express")
const router = express.Router();
const { Country } = require('../models/country');
const { State } =require('../models/state')
const { City } =require('../models/city')
// Get all countries
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json({messege:'country fetched...',recordcount:countries.length,data:countries});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all states for a country
router.get('/states', async (req, res) => {
  debugger
    try {
    const states = await State.find({country_short_name:req.body.country_short_name});
    if(req.body.country_short_name=="" || req.body.country_short_name==undefined){
      res.status(404).json({ message: "please mentioan country short name",key:'country_short_name' });
      return
    }
    res.status(200).json({messege:'country fetched...',recordcount:states.length,data:states});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all districts for a state
router.get('/states/city', async (req, res) => {
  try {
    const city = await City.find({state_name:req.body.state_name});
    if(req.body.state_name=="" || req.body.state_name==undefined){
      res.status(404).json({ message: "please mentioan country short name",key:'state_name' });
      return
    }
    res.status(200).json({messege:'country fetched...',recordcount:city.length,data:city});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/only_indian_states', async (req, res) => {
  debugger
    try {
    const states = await State.find({ country_short_name: 'IN' })
    res.status(200).json({messege:'country fetched...',recordcount:states.length,data:states});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router