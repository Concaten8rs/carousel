
const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '../client/dist'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.use("/", controllers);


app.listen(port, (error) => {
  if (error) {
    console.log(`error listening to port ${error}`);
  } else {
  console.log(`listening on port ${port}`);
  }
});