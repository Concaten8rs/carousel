const Product = require('../models/product.js');

const getAllPhotos = (callback) => {
  Product.find({}, (error, data) => {
    if (error) {
      console.log('error from database: ', err);
      callback(error, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getAllPhotos
}