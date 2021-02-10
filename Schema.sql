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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Alicia", "Qiu", 7, 100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Josh", "Arroyo", 10, 120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Andew", "Gabbi", 8, 75);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kammie", "Latay", 9,  100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Becca", "chiquette", 6, 120);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandon", "Dana", 5, 75);


CREATE TABLE role ( 
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NOT NULL,
    PRIMARY KEY (id)
  );

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 25000, 5);

CREATE TABLE department ( 
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("engineering")

 