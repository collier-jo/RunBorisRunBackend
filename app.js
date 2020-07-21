const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const app = express()

app.use(cors());

var ScoreController = require('./controllers/scoreboard');

app.get('/', ScoreController.Hello)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
