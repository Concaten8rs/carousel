const db = require('../../database/controllers/product.js');

const getAllPhotos = (req, res) => {
  db.getAllPhotos((err, result) => {
    if (err) {
      console.log('error getting all photos: ', err);
      res.status(500);
    } else {
      res.json(result);
    }
  })
}

module.exports = {
  getAllPhotos
}