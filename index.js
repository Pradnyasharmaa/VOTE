const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const url = 'http://127.0.0.1:8080/login';
const username = 'root'; // Replace with the actual username
const password = '123456789'; // Replace with the actual password
require('dotenv').config();

const app = express();

const { authenticateUser } = require('./auth');
const { connection } = require('./auth.js');
// app.post('/login', async (req, res) => {
//   const { username, password } = //req.body;

//   try {
//     // Authenticate user using the authenticateUser function from auth.js
//     const result = await authenticateUser(username, password);
    
//     // Handle authentication result...
//   } catch (error) {
//     // Handle error...
//   }
// });

//app.post('/login', async (req, res) => {
 // const { username, password } = //req.body;

//  try {
    // Authenticate user using the authenticateUser function from auth.js
  //  const result = await authenticateUser(username, password);
    
    // Handle authentication result...
 // } catch (error) {

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/login.html'));
});
// Authorization middleware
const authorizeUser = (req, res, next) => {
  const token = req.query.Authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).send('<h1 align="center"> Login to Continue </h1>');
  }
  
  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] });

    req.user = decodedToken;
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};



app.get('/js/login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/login.js'))
});

app.get('/css/login.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/login.css'))
});

app.get('/css/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/index.css'))
});

app.get('/css/admin.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/admin.css'))
});

app.get('/assets/main.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/main.jpg'));
});


app.get('/assets/eth5.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/bKtAze.jpg'))
});

app.get('/js/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/app.js'))
});

app.get('/admin.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/admin.html'));
});

app.get('/index.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.get('/dist/login.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/login.bundle.js'));
});

app.get('/dist/app.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/app.bundle.js'));
});

// Serve the favicon.ico file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

// Start the server
app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});

