const { Client } = require('pg');
const connectionString = 'postgres://postgres:$postgrespassword@127.0.0.1/carousel';

const db = new Client({
  connectionString: connectionString
});

db.connect();

db.query('SELECT * FROM photos limit 1', (error, data) => {
  if (error) {
    console.log('error connecting to postgres: ', error);
  } else {
    console.log('successfully connected to postgres');
  }
})

module.exports = db;