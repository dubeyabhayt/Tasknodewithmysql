
import mysql from 'mysql2/promise';


const con  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'taskmanagmet'
});


  /*const con= mysql.createPool({
   host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'taskmanagmet',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

});*/



export default con;
