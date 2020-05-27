const fs = require ('fs');
const faker = require ('faker');

const randomNumGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const appendLeading = (val) => {
  if (val < 10) {
    return `0${val}`;
  } else {
    return `${val}`;
  }
}

const generateDate = () => {
  var arr = [];
  var year = randomNumGenerator(2008, 2019);
  var month = randomNumGenerator(1,12);
  var day = randomNumGenerator(1,28);

  var date = `${year}-${appendLeading(month)}-${appendLeading(day)}`;

  arr.push(date);

  return arr;
}

// helper function to produce random photo
const generatePhotoUrl = () => {
  let photoId = randomNumGenerator(1, 1000);
  let photoUrl = `https://hrsf127-sdc.s3-us-west-1.amazonaws.com/Carousel+Photos/photo${photoId}.jpg`;
  return photoUrl;
}

// const generatePhotos = () => { // heap error writing 40mm records
//   console.log('generatePhotos');
//   let stream = fs.createWriteStream('data-generator/photosData.csv');

//   for (let i = 1; i < 30000001; i++) {
//     stream.write(`${i},${randomNumGenerator(1, 10000001)}, ${faker.lorem.sentence()}, ${randomNumGenerator(1, 10)}, ${generatePhotoUrl()}, ${generateDate()}\n`);
//   }
//   stream.end();
// }

const createString = (i) => {
  return `${i},${randomNumGenerator(1, 10000001)}, ${faker.lorem.sentence()}, ${randomNumGenerator(1, 10)}, ${generatePhotoUrl()}, ${generateDate()}\n`
}

const writer = fs.createWriteStream('data-generator/photosData.csv');

const generatePhotos = () => {
  console.log('generatePhotos');
  let i = 90000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
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
// generateProducts();
