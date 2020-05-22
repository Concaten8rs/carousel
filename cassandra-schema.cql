DROP KEYSPACE IF EXISTS carousel;
CREATE KEYSPACE carousel WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE carousel;

DROP TABLE IF EXISTS carousel.products;
CREATE TABLE carousel.products (
  id INT PRIMARY KEY,
  product_name TEXT,
  product_description DATE,
  cost INT
);

DROP TABLE IF EXISTS carousel.photos;
CREATE carousel.photos (
  id INT PRIMARY KEY,
  photo_description TEXT,
  photo_url TEXT,
  posting_date DATE,
  photo_product_id INT
)

CREATE INDEX index_photo_product_id ON carousel.photos (photo_product_id);

