var express = require('express');
var router = express.Router();

let animals = ["dog", "goat", "cat", "hourse"];


// router.get('/', function(req, res) {
  // res.send('You successfully created a GET route!');

//   let queryName = req.query.name;
//   if (queryName) { 
//     res.send("Welcome to the page" + queryName);
//   }
//   else {
//     req.send("Sad, no one is here");
//   }

// });
/*===============================================*/
router.get('/', function(req, res, next) {

  // let queryAnimal = req.query.animal;
  // if (animals.includes(queryAnimal)) { 
  //   res.send('Yep, we have a' + queryAnimal + '.');
  // }else {
  //   res.send('Nope, no' + queryAnimal + 'here.');
  // }

  /*response data formats*/
//  res.set('Content-Type', 'text/xml');
/*or*/
res.set('Content-Type', 'application/json');

  res.render('index');

});

router.post('/', function(req, res) {
  let bodyAnimal = req.body;
  if(animals.includes(bodyAnimal.animal)){
    res.send('Already have a ' + bodyAnimal.animal + ' thanks.') ;
  } else{
    animals.push(bodyAnimal.animal);
    res.send(animals);
  }
    // res.send('You successfully created a POST route!');

});

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});
router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
})

module.exports = router;
