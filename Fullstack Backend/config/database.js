import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQLpassword-1*',
  database: 'fullstack'
});
  
export default db;