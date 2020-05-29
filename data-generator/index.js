const fs = require ('fs');
const faker = require ('faker');

const randomNumGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// helper function to format date and month
const appendLeading = (val) => {
  if (val < 10) {
    return `0${val}`;
  } else {
    return `${val}`;
  }
}

// helper function to produce random date
const generateDate = () => {
  let year = randomNumGenerator(2008, 2019);
  let month = randomNumGenerator(1,12);
  let day = randomNumGenerator(1,28);

  let date = `${year}-${appendLeading(month)}-${appendLeading(day)}`;

  return date;
}

// helper function to produce random photo
const generatePhotoUrl = () => {
  let photoId = randomNumGenerator(1, 1000);
  let photoUrl = `https://hrsf127-sdc.s3-us-west-1.amazonaws.com/Carousel+Photos/photo${photoId}.jpg`;
  return photoUrl;
}

const writer = fs.createWriteStream('data-generator/photosData.csv');

const createString = (i) => {
  return `${i},${randomNumGenerator(1, 10000001)},${faker.lorem.sentence()},${randomNumGenerator(1, 10)},${generatePhotoUrl()},${generateDate()}\n`
}

/* below are commands to create data for Cassandra tables

const writer = fs.createWriteStream('data-generator/cassandraPhotosData.csv'); // create data for Cassandra photos table

const createString = (i) => {
    return `${i},${faker.lorem.sentence()},${randomNumGenerator(1, 10)},${generatePhotoUrl()},${generateDate()}\n`
}

const writer = fs.createWriteStream('data-generator/cassandraPhotosByProductData.csv'); // create data for Cassandra photos_by_product table

const createString = (i) => {
  return `${randomNumGenerator(1, 10000001)},${randomNumGenerator(1, 10)},${faker.lorem.sentence()},${i},${generatePhotoUrl()},${generateDate()}\n`
}
*/

const generatePhotos = () => {
  console.log('generatePhotos');
  let i = 90000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 1) {
        writer.write(createString(i), 'utf-8');
      } else {
        ok = writer.write(createString(i), 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

const generateProducts = () => {
  console.log('generateProducts');
  let stream = fs.createWriteStream('data-generator/productsData.csv');

  for (let i = 1; i < 10000001; i++) {
    stream.write(`${i},${faker.commerce.productName()},${faker.lorem.sentence()},${faker.commerce.price()}\n`)
  }
  stream.end();
}

generatePhotos();
generateProducts();
