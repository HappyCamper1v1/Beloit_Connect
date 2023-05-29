// server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  host: 'localhost', // replace with your host name
  user: 'root',      // replace with your MySQL username
  password: 'password',  // replace with your MySQL password
  database: 'test_db' // replace with your MySQL database
});

app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM table_name"; // replace with your table name
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
