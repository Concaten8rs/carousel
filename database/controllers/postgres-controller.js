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

const addPhoto = (params, callback) => {
  let queryString = `INSERT INTO photos (product_id, photo_description, photo_order, photo_url, posting_date) VALUES (${params.id},'${params.photo_description}',${params.photo_order},'${params.photo_url}','${params.posting_date})'`;
  db.query(queryString, (erorr, data) => {
    if (error) {
      console.log('database error creating new photo in photos table ', error);
      callback(error, null);
    } else {
      callback (null, data);
    }
  })
}

const deletePhoto = (params, callback) => {
  let queryString = `DELETE FROM photos WHERE id=${params.id}`;
  db.query(queryString, (error, data) => {
    if (error) {
      console.log('database error deleting photo ', error);
      callback(error, null);
    } else {
      callback(null, data);
    }
  })
}

const updatePhoto = (params, callback) => {
  let queryString = `UPDATE photos SET product_id=${params.product_id}, photo_description=${params.photo_description}, photo_order=${params.photo_order}, photo_url=${params.photo_url} WHERE id=${params.id}`;
  db.query(queryString, (error, data) => {
    if (error) {
      console.log('databse error updating photo ', error);
      callback(error, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getPhotosByProduct,
  addPhoto,
  deletePhoto,
  updatePhoto
}