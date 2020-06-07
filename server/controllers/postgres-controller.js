const db = require('../../database/controllers/postgres-controller.js');
const redis = require('redis');

const client = redis.createClient();

client.on('connect', (err) => {
  if (err) {
    console.log('redis error ', err);
  } else {
    console.log('connected to redis');
  }
})

const getPhotosByProduct = (req, res) => {
  console.log('server => ', req.params);
  // console.log('server ', db);
  client.get(req.params.id, (error, result) => {
    if (result) {
      res.json(result.rows);
    } else {
      db.getPhotosByProduct(req.params, (error, result) => {
        if (error) {
          console.log('server error retrieving photos ', error);
          res.status(500);
        } else {
          // console.log(result.rows);
          client.set(req.params.id, JSON.stringify(result.rows));
          res.json(result.rows);
        }
      })
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