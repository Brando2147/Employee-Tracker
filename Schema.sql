/* File to create the necessary tables in SQL*/

DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role ( 
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NOT NULL,
    PRIMARY KEY (id)
  );


CREATE TABLE department ( 
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
    PRIMARY KEY (id)
);


