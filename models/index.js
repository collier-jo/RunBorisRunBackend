import mongoose from 'mongoose';

import Scoreboard from './scoreboard';

const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL);
}

const models = { Scoreboard }

export { connectDB };

export default models;
