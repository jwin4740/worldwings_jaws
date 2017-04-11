// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.CLEARDB_URL) {
  connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b5c06e7c9887c5',
    password: '1e809df3',
    database: 'heroku_6b0bbc304e5f86f'
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