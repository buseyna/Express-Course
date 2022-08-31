var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res, next) {
  models.actor.findAll({}).then(actorsFound => {
    res.render('actors', {
      actors: actorsFound
    });
  });
});

module.exports = router;
