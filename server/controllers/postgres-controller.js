const db = require('../../database/controllers/postgres-controller.js');

const getPhotosByProduct = (req, res) => {
  // console.log('server => ', req.params);
  // console.log('server ', db);
  db.getPhotosByProduct(req.params, (error, result) => {
    if (error) {
      console.log('server error retrieving photos ', error);
      res.status(500);
    } else {
      // console.log(result.rows);
      res.json(result.rows);
    }
  })
}

module.exports = {
  getPhotosByProduct
}