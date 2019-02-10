// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
  host: "	ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "m9ite1982tczw45z",
  password: "ziif0bxbdud1r5cr", 
  database: "fdvlhool3pl2zhli"
  
});}

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
