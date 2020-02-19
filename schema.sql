
DROP DATABASE IF EXISTS burgerLord_db;

CREATE DATABASE burgerlord_db;

USE Burgerlord_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  top_bun VARCHAR(255) NOT NULL,
  cheese VARCHAR(300) NULL,
  Lettice BOOLEAN,
  meat VARCHAR(100) NOT NULL,
  bottom_bun VARCHAR (225)NOT NULL,
  name VARCHAR(100) NULL,
  eaten BOOLEAN NOT NULL,
   PRIMARY KEY (id)
);
INSERT INTO burgers(top_bun, cheese, lettice, meat, bottom_bun,name, eaten)VALUES
("white","cheddar",true,"chicken","white","BURGER DUKE!",false);
INSERT INTO burgers(top_bun, cheese, lettice, meat, bottom_bun,name, eaten)VALUES
("white","cheddar",false,"chicken","white","RITTER VON RUBENSTEIN",true);