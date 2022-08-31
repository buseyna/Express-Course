var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
  try{
    const { firstName, lastName, Email, password } = req.body
  const [user, created] = await models.User.findOrCreate({
    where: {
      firstName,
      lastName,
      email:Email,
      password
    }
  })
  if(created)  
  return res.send('Sign in succesfully');
  else {
    return res.send(["Already exist" , user])
  }
  }catch(err){
    return  res.send(err?.errors[0]?.message)
  }
   
});

module.exports = router;
