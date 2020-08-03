const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()


mongoose.connect("mongodb://localhost/run_boris_run", {
  useNewUrlParser: "true",
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.use(cors());

app.use(bodyParser.json());


var ScoreController = require('./controllers/scoreboard');

app.get('/', ScoreController.View)
app.post('/new', ScoreController.Create)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
