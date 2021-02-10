var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});


function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}


function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        findEmployees();
    }
    )
}


function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        findEmployees();
    }
    )
}


function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        findEmployees();
    }
    )
}


function addDepartment() {
    inquirer
        .prompt({
            name: "Add",
            type: "input",
            input: "What department do you want to add?"
        }).
        then(function (answer) {
            var query = " ";
            connection.query(query, function (err, res) {
                if (err) throw err;
                console.table(res)
                findEmployees();
            }
            )
        });
}
