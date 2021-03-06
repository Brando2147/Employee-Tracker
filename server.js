var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

// Connection info to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

// After connection query to initialize program
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});



// Initial function to prompt menu
function init() {
    inquirer
        .prompt({
            name: "menu",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "View Employees",
                "View Roles",
                "Add Departments",
                "Add Employees",
                "Add Roles",
                "Update Roles",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.menu) {
                case "View Departments":
                    viewDepartments();
                    break;

                case "View Employees":
                    viewEmployees();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "Add Departments":
                    addDepartments();
                    break;

                case "Add Employees":
                    addEmployees();
                    break;

                case "Add Roles":
                    addRoles();
                    break;

                case "Update Roles":
                    updateRoles();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

// Function to view departments 
function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    }
    );
}

// Function to view employees
function viewEmployees() {
    var query = connection.query(`SELECT role_id, first_name, last_name, title, salary FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            init();
        }
    );
}

// Function to view roles
function viewRoles() {
    var query = connection.query(`SELECT title, name, salary FROM role INNER JOIN department ON role.department_id = department.id`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            init();
        });
}


// Function to add departments
function addDepartments() {
    inquirer
        .prompt({
            name: "add_Departments",
            type: "input",
            message: "What department do you want to add?",
        })
        .then(function (answer) {
            var query = "INSERT INTO department (name) VALUES (?)";
            connection.query(query, answer.add_Departments, function (err) {
                if (err) throw err;
                viewDepartments();
                init();
            }
            );
        });
}

// Function to add employees
function addEmployees() {
    inquirer
        .prompt([{
            name: "add_FirstName",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "add_LastName",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "add_RoleID",
            type: "input",
            message: "What is the employee's role ID?",
        },
        {
            name: "add_ManagerID",
            type: "input",
            message: "What is this employee's manager's ID?",
        }])
        .then(function (answer) {
            var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
            connection.query(query, [answer.add_FirstName, answer.add_LastName, answer.add_RoleID, answer.add_ManagerID], function (err) {
                if (err) throw err;
                viewEmployees();
            }
            );
        });
}

// Function to add roles
function addRoles() {
    inquirer
        .prompt([{
            name: "add_Title",
            type: "input",
            message: "What is the employee's title?",
        },
        {
            name: "add_Salary",
            type: "input",
            message: "What is the employee's salary?",
        },
        {
            name: "add_Department",
            type: "input",
            message: "What is the department of ID?",
        }])
        .then(function (answer) {
            var query = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
            connection.query(query, [answer.add_Title, answer.add_Salary, answer.add_Department], function (err) {
                if (err) throw err;
                viewRoles();
            }
            );
        });
}


// Function to update roles
function updateRoles() {
    inquirer.prompt([{
        name: "add_RoleID",
        type: "input",
        message: "what is the Role ID to update?"
    },
    {
        name: "add_EmployeeID",
        type: "input",
        message: "what is the employee's ID?"
    }]).then(function (answer) {
        var query = "UPDATE employee SET role_id= ? where id= ?";
        connection.query(query, [answer.add_RoleID, answer.add_EmployeeID], function (err, res) {
            if (err) throw err;
            viewEmployees();
        }
        );
    });
}