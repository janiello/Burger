CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Breakfast Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Avocado Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("BBQ Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Western Burger", false);