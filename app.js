const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/run_boris_run", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// mongoose.connect("mongodb://localhost/run_boris_run", {useNewUrlParser:"true"}).catch(function (reason) {
//   console.log('Unable to connect to the mongodb instance. Error: ', reason);
// });

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
app.get('/delete', ScoreController.Delete)

// app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
app.listen(process.env.PORT || 8080);