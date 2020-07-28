const mongoose = require('mongoose');
var ScoreboardModel = require('../models/scoreboard');
const scoreboard = {name: 'hibo', score: 100};

describe('Scoreboard Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server
    // By using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('can list all scores', async () => {
      await ScoreboardModel.find(function(err, scoreboards) {
        expect(err).toBeNull();
        expect(scoreboards).toEqual([]);
      });
    });

    it('create & save user successfully', async () => {
        const validScoreboard = new ScoreboardModel(scoreboard);
        const savedScoreboard = await validScoreboard.save();
        // Object Id should be defined when successfully saved to MongoDB.
        console.log(savedScoreboard)
        expect(savedScoreboard._id).toBeDefined();
        expect(savedScoreboard.name).toBe(scoreboard.name);
        expect(savedScoreboard.score).toBe(scoreboard.score);
    });

    // Test Schema is working!!!
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('insert scoreboard successfully, but the field does not defined in schema should be undefined', async () => {
        const scoreboardWithInvalidField = new ScoreboardModel({ name: 'hibo', score: 100, message: 'this is invalid' });
        const savedScoreboardWithInvalidField = await scoreboardWithInvalidField.save();
        expect(savedScoreboardWithInvalidField._id).toBeDefined();
        expect(savedScoreboardWithInvalidField.message).toBeUndefined();
    });
})
