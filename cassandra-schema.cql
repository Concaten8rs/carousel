DROP KEYSPACE IF EXISTS carousel;
CREATE KEYSPACE carousel WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE carousel;

DROP TABLE IF EXISTS carousel.products; -- getting products
CREATE TABLE carousel.products (
  product_id INT,
  product_name TEXT,
  product_description DATE,
  cost INT,
  PRIMARY KEY (product_id)
);

DROP TABLE IF EXISTS carousel.photos; -- deleting, creating, and updating
CREATE carousel.photos (
  photo_id INT,
  photo_order INT,
  photo_description TEXT,
  photo_url TEXT,
  posting_date DATE,
  PRIMARY KEY (photo_id)
);

DROP TABLE IF EXISTS carousel.photos_by_product; -- getting photos
CREATE carousel.photos (
  photo_id INT,
  product_id INT,
  photo_order INT,
  photo_description TEXT,
  photo_url TEXT,
  posting_date DATE,
  PRIMARY KEY (product_id, photo_order)
) WITH CLUSTERING ORDER BY (photo_order DESC)

