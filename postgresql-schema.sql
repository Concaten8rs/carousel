-- DROP DATABASE IF EXISTS carousel;
-- CREATE DATABASE carousel;

-- \c carousel;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_description TEXT NOT NULL,
  cost INT NOT NULL
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  photo_description TEXT NOT NULL,
  photo_url TEXT,
  posting_date DATE NOT NULL
);

CREATE TABLE products_photos (
  products_id INT NOT NULL,
  photos_id INT NOT NULL
);

-- add back foreign keys
ALTER TABLE photos
  FOREIGN KEY(product_id) REFERENCES products(id);

ALTER TABLE products_photos
  FOREIGN KEY(products_id) REFERENCES products(id);

ALTER TABLE products_photos
  FOREIGN KEY(photos_id) REFERENCES photos(id);


