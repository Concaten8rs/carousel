const db = require('../postgres-index.js');

const getPhotosByProduct = (params, callback) => {
  let queryString = `SELECT * FROM photos WHERE product_id=${params.id}`;
  db.query(queryString, (error, data) => {
    if (error) {
      console.log('database error retrieving data from photos table ', error);
      callback(error, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getPhotosByProduct
}