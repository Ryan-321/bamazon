DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES 

('light bulb', 'housing', 1.30, 100),
('sofa', 'furniture', 2000.35, 2),
('coat', 'clothing', 100.15, 10),
('filter', 'housing', .95, 50),
('bike', 'outdoors', 1100, 15),
('kayak', 'outdoors', 560.50, 1),
('water bottle', 'outdoors', 7.50, 25),
('chair', 'furniture', 54.30, 14),
('desk', 'furniture', 300, 8),
('socks', 'clothing', 4.76, 50);