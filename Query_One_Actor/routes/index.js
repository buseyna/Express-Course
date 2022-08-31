var express = require('express');
var router = express.Router();
var models = require('../models')

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

router.get('/specificActor', function(req, res, next) {
  models.actor
    .findOne({
      where: {
        actor_id: 2
      }
    })
    .then(actor => {
      res.render('specificActor', {
        actor: actor
      });
    });
});

module.exports = router;
