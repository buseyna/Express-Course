var express = require('express');
var router = express.Router();
var mysql = require('mysql')


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'sakila',
})
connection.connect(function(err){
  if (err){
    console.error(err.message);
 
    return;
  }
  console.log('Yay! You are connected to the database!')
});


router.get('/film', function(req, res, next){
  const filmList = `SELECT * FROM film`;

  connection.query(filmList, function(err, result){
   if (err){
    console.log(err);
    res.render('error', {message: err.message})  
   }else {
    res.render('film.hbs', {film: result});
   }
  
  })
})
router.get('/film/:id', function(req, res, next){
   let idfilm = parseInt(req.params.id);
  const film_id = `SELECT film.title, actor.first_name, actor.last_name
  FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id
  INNER JOIN actor ON film_actor.actor_id = actor.actor_id
  WHERE film.film_id = ${idfilm}`;

connection.query(film_id, function(err, result){
  if (err) {
    res.render('error', { message: err.message });
  } else {
    console.log(result);
    res.render('filmDetails', { 
      filmTitle: result[0].title, 
      films: result
    });  
  }
});
});


module.exports = router;
