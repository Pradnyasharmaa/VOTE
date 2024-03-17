const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createPool({
  host: '127.0.0.1', // Corrected host address
  user: 'root',
  password: '123456789',
  database: 'voter_db',
  port:'3306'
});

// Function to authenticate user
function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    // Query to check user credentials
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      if (results.length === 1) {
        resolve({ success: true, user: results[0] });
      } else {
        resolve({ success: false });
      }
    });
  });
}
module.exports = connection
module.exports = { authenticateUser };

