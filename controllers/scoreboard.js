var Scoreboard = require('../models/scoreboard');

var ScoreboardController = {
  View: function(request, response){
    Scoreboard.find(function(err, result) {
      response.send(result);
    });
  },

  Create: function(request, response){
    // change the hardcoded values
    var newScore = new Scoreboard({name: "hibo", score: 200})

     newScore.save(function(err){  
      response.send('saved') 
    }); 

    response.redirect('/')
  }
};

module.exports = ScoreboardController;
