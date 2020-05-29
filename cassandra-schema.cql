DROP KEYSPACE IF EXISTS carousel;
CREATE KEYSPACE carousel WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE carousel;

DROP TABLE IF EXISTS carousel.products; -- getting products
CREATE TABLE carousel.products (
  product_id INT,
  product_name TEXT,
  product_description TEXT,
  cost DECIMAL,
  PRIMARY KEY (product_id)
);

COPY carousel.products (product_id, product_name, product_description, cost) FROM '/Users/serviolee/Documents/nextchapter/hrsf127-sdc/carousel/data-generator/productsData.csv' WITH DELIMITER=',';

DROP TABLE IF EXISTS carousel.photos; -- deleting, creating, and updating
CREATE TABLE carousel.photos (
  photo_id INT,
  photo_description TEXT,
  photo_order INT,
  photo_url TEXT,
  posting_date DATE,
  PRIMARY KEY (photo_id)
);

-- alternative method to copying into database - need to run cmd in /cassandar/build
./cassandra-loader -f /Users/serviolee/documents/nextchapter/hrsf127-sdc/carousel/data-generator/cassandraPhotosData.csv -host 127.0.0.1 -schema "carousel.photos(photo_id, photo_description, photo_order, photo_url, posting_date)";

DROP TABLE IF EXISTS carousel.photos_by_product; -- getting photos
CREATE TABLE carousel.photos_by_product (
  photo_id INT,
  product_id INT,
  photo_description TEXT,
  photo_order INT,
  photo_url TEXT,
  posting_date DATE,
  PRIMARY KEY (product_id, photo_order)
) WITH CLUSTERING ORDER BY (photo_order DESC);

-- alternative method to copying into database - need to run cmd in /cassandar/build
./cassandra-loader -f /Users/serviolee/documents/nextchapter/hrsf127-sdc/carousel/data-generator/cassandraPhotosByProductData.csv -host 127.0.0.1 -schema "carousel.photos_by_product(product_id, photo_order, photo_description, photo_id, photo_url, posting_date)";

-- test insert
INSERT INTO carousel.photos (photo_id, photo_description, photo_order, photo_url, posting_date) VALUES (23, Repellendus quo consequatur aut est voluptatem aliquid impedit laborum id., 7, https://hrsf127-sdc.s3-us-west-1.amazonaws.com/Carousel+Photos/photo3.jpg, '2009-05-24');