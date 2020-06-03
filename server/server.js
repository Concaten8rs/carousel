const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const controller = require('./controllers/controller.js');
const mongo = require('../database/database.js');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/api/products/', controller.getAllPhotos);

app.listen(port, (error) => {
  if (error) {
    console.log(`error listening to port ${error}`);
  } else {
  console.log(`listening on port ${port}`);
  }
});