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

  Delete: function(req, res){
    db.myColl.deleteOne({ _id: "5f2a9689b1256a0017b99db6"}
    )
    res.send("saved")
    
  }
};

module.exports = ScoreboardController;
