var Scoreboard = require('../models/scoreboard');

var ScoreboardController = {
  View: function(request, response){
    Scoreboard.find(function(err, result) {
      response.send(result);
    });
  },

  Create: function(request, response){
    var newScore = new Scoreboard({name: request.body.name, score: request.body.score})


    newScore.save(function(err){
      response.send('saved')
    });
  },
};

module.exports = ScoreboardController;
