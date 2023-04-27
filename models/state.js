const mongoose = require('mongoose');
const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country_short_name: { type: String, required:true },
});
const State = mongoose.model('State', stateSchema);

module.exports = { State };