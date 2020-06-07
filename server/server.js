const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const controller = require('./controllers/postgres-controller.js');
// const mongo = require('../database/mongo-index.js'); // to connect to mongo database
const pg = require('../database/postgres-index.js');
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/api/products/:id', controller.getPhotosByProduct);

app.post('/api/products/:id/photos', controller.addPhoto);

app.delete('/api/products/:id/photos/:photo_id', controller.deletePhoto);

app.put('/api/products/:id/photos/:photo_id', controller.updatePhoto);

app.listen(port, (error) => {
  if (error) {
    console.log(`error listening to port ${error}`);
  } else {
  console.log(`listening on port ${port}`);
  }
});