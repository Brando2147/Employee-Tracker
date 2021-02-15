/* Import test data to SQL */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Alicia", "Qiu", 1, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Josh", "Arroyo", 2, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Andew", "Gabbi", 3, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kammie", "Latay", 4,  10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ( "Becca", "chiquette", 5, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Juwig", 6, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nellie", "TA", 7, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Skye", "Luckin", 8, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jammie", "Hardy", 2, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Baddie", 2, 10);

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 250000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Intern", 40000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Manager", 60000, 5);

INSERT INTO role (title, salary, department_id)
VALUES ("COO", 250000, 6);

INSERT INTO role (title, salary, department_id)
VALUES ("IT Specialist", 40000, 7);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 80000, 8);

INSERT INTO department (name)
VALUES ("engineering");

 INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Devops");

INSERT INTO department (name)
VALUES ("Product");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Support");