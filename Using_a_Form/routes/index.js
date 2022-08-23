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


const query = `SELECT * from actor LIMIT 10`;
connection.query(query, (err, results) => {
  if (err) throw err;
  console.log(results);
});

/* GET home page. */
router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id)
  console.log(actorId);

  let idQuery = `SELECT * FROM actor WHERE actor_id=${actorId}`;
  connection.query(idQuery, (err, result) => {
    if (err) {
      console.log(err.message);
      next(); 
      return;
    }
    /*console.log(result);*/
    if (result.length > 0){
      res.render('index', {actor: result[0]})
    } else {
      res.send('not a valid id')
    }
  })

});

/* GET home page. */
const actorList = `SELECT * FROM actor`;

router.get('/actor', function(req, res, next) {
connection.query(actorList, function(err, result){
  res.render('actor', {
    actor: result
  })
});
});
router.post('/actor', function(req,res, next){
  console.log(req.body);
  const newActor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  /* Check if the actor already exist */
  const selectActor = `SELECT * FROM actor WHERE first_name = '${newActor.first_name}' AND last_name = '${newActor.last_name}'`;
   connection.query(selectActor, function(err, result){

      if(result.length >0) {
        res.send('Sorry, that actor already exists.');
      } else{
         let newActorQuery = `INSERT INFO actor(first_name, last_name);
         VALUES ('${newActor.first_name}', '${newActor.last_name}')`;
         connection.query(newActorQuery, function(err, insertResult){
          if (err){
            res.send('error',{message: 'Oops, something went wrong'})
          }else {
            res.redirect('/actor')
          }
         })
      }
    });
  });

module.exports = router;
