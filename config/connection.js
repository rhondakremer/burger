var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  console.log("Using environment: ", process.env.JAWSDB_URL);
  try {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  catch (error) {
    console.log(error);
  }
} 
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: process.env.MYSQL_PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "burgers_db"
  });
}



connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
