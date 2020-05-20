// import express
const express = require("express");
// import body parser
const bodyParser = require("body-parser");
const cors = require('cors');
// import path
const path = require("path");

//--------------------------------------------------------------------------

// create app
let app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "client", "src", "style.module.css")));

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.use(cors());
// require routes
const routes = require(path.join(__dirname, "routes.js"))

app.use("/", routes);

//--------------------------------------------------------------------------


// choose a port
const port = 3000;
// listen to the app
app.listen(port, ()=> {console.log("Ahoy! I'm listening! at port : " + port)});