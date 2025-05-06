const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middleware to access public folder
app.use(express.static('public'))

// ejs view engine
app.set('view engine', 'ejs')

// database connection
const dbURI = 'mongodb+srv://komalakavula416:PW5e83eXattkmD7f@cluster0.m4hsge3.mongodb.net/'
mongoose.connect(dbURI)
  .then((result) => {
    console.log("connected")
    app.listen(3000)
  })
  .catch((err) => console.log(err));

  // routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
