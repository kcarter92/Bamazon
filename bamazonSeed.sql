DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NULL,
	department_name VARCHAR(50) NULL,
	price DECIMAL (10,2) NULL,
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("red bull", "cosumables", 5.50, 150), ("laundry detergent", "home", 7.50, 150), ("hdmi cable", "electronics", 10.00, 150), ("vitamin water", "cosumables", 4.00, 150), ("android charger", "electronics", 7.75, 100), ("ramen", "cosumables", 2.50, 200), ("dish soap", "home", 4.25, 150), ("tshirts", "clothing", 6.00, 150), ("boots", "clothing", 30.00, 150), ("macbook pro", "electronics", 3000.00, 25), ("blender", "home", 50.00, 100);