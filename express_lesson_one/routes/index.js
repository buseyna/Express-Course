var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Exp' });
  // res.render('error', { title: 'Exp' });
    // res.render('index', { title: 'Exp', name: "Buseyna" });
    // res.render('index', { title: 'Exp', users: ["Buseyna", "Bilal", "Omar", "Ruvaida"] });
    res.render('index', {
       title: 'My Cats',
        cats: [
          { name: "Yaska", favoriteToy: "ball"},
          { name: "Vaska"},
          { name: "Laska"},
          { name: "Maska"}
        ] });


  });

module.exports = router;
