const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()


// mongoose.connect("mongodb://localhost/run_boris_run", { useNewUrlParser: "true" })

// mongoose.connect("mongodb://localhost/run_boris_run", {useNewUrlParser:"true"}).catch(function (reason) {
//   console.log('Unable to connect to the mongodb instance. Error: ', reason);
// });



var url = 'mongodb://localhost:27017/run_boris_run'
mongoose.connect(url)
  .then(function (db) { // <- db as first argument
    console.log(db)
  })
  .catch(function (err) {})


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

// app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
app.listen(process.env.PORT || 3000);