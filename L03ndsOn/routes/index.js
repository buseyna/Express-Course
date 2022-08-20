var express = require('express');
var router = express.Router();
var {storyLine} = require('../models/storyLine')

/* GET home page. */
router.get('/beginning', function(req, res, next) {
 let beg = storyLine.find(story => {
  return story.storyPart === 'beginning'
 })
 res.render('beginning', {beg});
});

router.get('/middle', function(req, res, next) {

  let mid = storyLine.find(stor => {
    return stor.storyPart === 'middle'
   })
   res.render('middle', {mid});
   

});

router.get('/end', function(req, res, next) {
  let en = storyLine.find(sto => {
    return sto.storyPart === 'end'  })
   res.render('end', {en});
   
  
});

module.exports = router;
