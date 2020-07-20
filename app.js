const express = require('express')
const app = express()
const port = 3000

var ScoreController = require('./controllers/scoreboard');

app.get('/', ScoreController.Hello)

app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))
