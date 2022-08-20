var express = require('express');
var router = express.Router();
let cats = [];

router.post('/cats', function(req, res) {
  // res.send('You successfully created a POST route!');

if (cats.includes) {
  res.send('New member was added')

} else {
  cats.push(req.params)
  res.send("The member already exist")

}
  
});

router.get('/cats/:name', function(req, res) {
  // res.send('You successfully created a GET route!');
    res.send("You're successfully was added");

});

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

module.exports = router;
