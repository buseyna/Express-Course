var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'sakila'
});

connection.content(
  function(err){
  if(err){
    console.error(err.message);
    return;
  }
  console.log('Yay, You are connected to the database');
});

const query = `SELECT * FROM actor LIMIT 10`;

connection.query(query, (err, results) => {
  if (err) throw err;
 console.log(results);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

module.exports = router;