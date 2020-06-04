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

const addPhoto = (req, res) => {
  db.addPhoto(req.params, (error, result) => {
    if (error) {
      console.log('server error adding photo ', error );
      res.status(500);
    } else {
      res.sendStatus(201);
    }
  })
}

const deletePhoto = (req, res) => {
  db.deletePhoto(req.params, (error, result) => {
    if (error) {
      console.log('server error deleting photo ', error);
      res.status(500);
    } else {
      res.sendStatus(204);
    }
  })
}

const updatePhoto = (req, res) => {
  db.updatePhoto(req.params, (error, result) => {
    if (error) {
      console.log('server error updating photo ', error);
      res.status(500);
    } else {
      res.sendStatus(204);
    }
  })
}

module.exports = {
  getPhotosByProduct,
  addPhoto,
  deletePhoto,
  updatePhoto
}