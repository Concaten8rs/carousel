const { Client } = require('pg');
// const connectionString = 'postgres://postgres:$postgrespassword@127.0.0.1/carousel'; // local connection
const connectionString = 'postgres://serviolee:root@13.57.233.92/carousel'; // server connection

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