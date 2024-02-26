// db.js

const mysql = require('mysql');

// Create a connection pool to the AWS RDS instance
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'your-rds-endpoint.amazonaws.com',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Wrap the connection logic in a function for reusability
const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }
      resolve(connection);
    });
  });
};

module.exports = { getConnection };