const mongoose = require('mongoose');

const scoreboardSchema = new mongoose.Schema({
  name: String,
  score: Number
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

module.exports = Scoreboard;
// export default Scoreboard;
