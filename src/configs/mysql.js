const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactBaze",
});

connection.connect((error) => {
  if (error) {
    console.error("Klaida: " + error.stack);
    return;
  }
  console.log("Pavyko su id:" + connection.threadId);
});

module.exports = connection;
