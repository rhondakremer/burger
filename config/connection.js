var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  console.log(" Using environment:", process.env.JAWSBD_URL);
  try {
    connection = mysql.createConnection(process.env.JAWSBD_URL);
  }
  catch (error) {
    console.log(error);
  }

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
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
