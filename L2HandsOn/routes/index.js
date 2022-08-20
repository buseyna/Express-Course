var express = require('express');
var router = express.Router();

let flowers = [
  'Orchid',
  'Iris',
  'Hydrangea',
  'Amarylis',
  'Dahlia',
  'Daffodil',
  'Bleeding Heart'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  let queryFlower = req.query.flower;
  if(flowers.includes(queryFlower)){
    res.send(' Yes, we have ' + queryFlower + ' in our garden')
  } else {
    res.send(' Nope, we do not have ' + queryFlower + ' in our garden, but maybe we should plant it');
  }

  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let bodyFlower = req.body;
  if(flowers.includes(bodyFlower)){
    res.send('We already have that flower, no need to add it')
  } else {
    flowers.push(bodyFlower.flower);

    res.send(flowers);
  }


  // res.render('index', { title: 'Express' });
});

module.exports = router;
