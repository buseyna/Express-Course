var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('./', async(req, res, next) => {
  try{

  const {first_name, last_name} = req.body
  const [actor, created] = await models.actor.findCreate({
    where: {
      first_name,
      last_name
    }
  })
  if(created)
  return res.send('Done Well') 
  else{
return res.send(['Something went wrong', actor])
  }
}  catch(err){
  return res.send(err?.errors[0]?.message)
}
})

module.exports = router;
