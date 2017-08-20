var mysql = require("mysql");

exports.connection =
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Superman1103",
  database: "burgers_db"
});
