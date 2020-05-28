DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

\c carousel;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_description TEXT NOT NULL,
  cost NUMERIC NOT NULL
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  photo_description TEXT NOT NULL,
  photo_order SMALLINT NOT NULL,
  photo_url TEXT NOT NULL,
  posting_date DATE
);

-- add back foreign keys
ALTER TABLE photos
  ADD FOREIGN KEY(product_id) REFERENCES products(id);

COPY products (id, product_name, product_description, cost) FROM '/Users/serviolee/Documents/nextchapter/hrsf127-sdc/carousel/data-generator/productsData.csv' DELIMITER ',' CSV;

COPY photos (id, product_id, photo_description, photo_order, photo_url, posting_date) FROM '/Users/serviolee/Documents/nextchapter/hrsf127-sdc/carousel/data-generator/photosData.csv' DELIMITER ',' CSV;