const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const json = require('json');
const PORT = process.env.PORT || 5000
const app = express();
const db= require('./config/database');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Test DB
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.use('/',require('./routes/home'));

app.listen(PORT,() => console.log(`listening at ${PORT}`))

