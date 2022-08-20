CREATE DATABASE oracleWines;

CREATE TABLE products ( 
  product_id INT NOT NULL UNSIGNED PRIMARY KEY AUTO INCREMENT,
  name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  discount DECIMAL,
  stock INT NOT NULL,
  category_id INT NOT NULL,
  awards INT,
  description TEXT,
  extra_description TEXT,
  rate INT,
  image TEXT NOT NULL,
  PRIMARY KEY(product_id),
  FOREIGN KEY (category_id) REFERENCES productCategory (productCategory_id)
);

CREATE TABLE productCategory(
  productCategory_id int NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(productCategory_id),
);

CREATE TABLE cart(
  cart_id INT NOT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY(cart_id),
  FOREIGN KEY (user_id) REFERENCES productCategory (user_id),
  FOREIGN KEY (product_id) REFERENCES products (product_id)
);

CREATE TABLE users (
  user_id INT NOT NUL,
  name VARCHAR(100) NOT NULL,
  userName VARCHAR(100) NOT NULL,
  email TEXT NOT MULL UNIQUE,
  bday DATE NOT NULL,
  invoice_id INT NOT NULL,
  interest_id INT NOT NULL,
  picture TEXT NOT NULL,
  password TEXT NOT NULL,
  userCategory_id INT NOT NULL,
  PRIMARY KEY(user_id),
  FOREIGN KEY (invoice_id) REFERENCES invoice (invoice_id),
  FOREIGN KEY (interest_id) REFERENCES interest (interest_id),
  FOREIGN KEY (userCategory_id) REFERENCES usersCategory (userCategory_id)
);

CREATE TABLE interest (
  interest_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(interest_id)
);

CREATE TABLE invoice (
  invoice_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(invoice_id)
);

CREATE TABLE usersCategory (
  userCategory_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY(userCategory_id)
);
