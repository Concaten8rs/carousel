// require router
const router = require("express").Router();
// require path
const path = require("path");
// write the controller requests
const model = require(path.join(__dirname, "model.js"));

router.get("/caro/fetch", model.get)

router.get('/caro', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

router.get('/caro/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
});

router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

router.get('/test/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
});

module.exports = router;