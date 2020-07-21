import mongoose from 'mongoose';
 
const scoreboardSchema = new mongoose.Schema({
  name: string, 
  score: integer 
});
 
const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);
 
export default Scoreboard;