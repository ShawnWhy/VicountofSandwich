
DROP DATABASE IF EXISTS burgerLord_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgerlord_db;

USE Burgerlord_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  top_bun VARCHAR(255) NOT NULL,
  cheese VARCHAR(300) NULL,
  Lettice BOOLEAN,
  bottom_bun VARCHAR (225)NOT NULL,
  name VARCHAR(100) NULL,
  eaten BOOLEAN NOT NULL,
   PRIMARY KEY (id)
)


