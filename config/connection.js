// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: 'wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'dlm4rgt37q308ite',
    password: 'dayuxqnae55nyfwy',
    database: 'wgbgjjdudztlge8l'
  });
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'platinum',
    database: 'ww2_db'
  });
}


// Make connection.

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    setTimeout(connection.connect);
    return;
  }
});



// Export connection for our ORM to use.
module.exports = connection;