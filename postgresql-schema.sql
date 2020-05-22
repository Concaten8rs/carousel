DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

\c carousel;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_description TEXT NOT NULL,
  cost INT NOT NULL
)

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id),
  photo_title TEXT NOT NULL,
  posting_date DATE NOT NULL
)