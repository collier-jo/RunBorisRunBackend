var Scoreboard = require('../models/scoreboard');

describe('Scoreboard', () => {
  test('Scoreboard object has a name', () => {
    var scoreboard = new Scoreboard({name: 'hibo'});
    expect(scoreboard.name).toEqual('hibo');
  })
})
