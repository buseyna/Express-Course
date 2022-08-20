var express = require('express');
var router = express.Router();

var {products} = require('../modules/products');

/* GET home page. */
router.get('/', function(req, res) {
//   res.render('products', { title: 'Products' });
res.send(products);
console.log("count" + products.length)
});

router.get('/:id', function(req, res) {
    const getId = (y) => {
        return y[products.length -1].id
        
      }
    
// const getNewId = (x) => {
//         return x[products.length].id +1
//       }

    res.send(products);    
    });


router.post('/', function(req, res) {
    var  {id, title , description, price } = req.body;

    var newProduct = {
        title: "XBOX"
    }

    id = products[products.length-1].id+1

    const find = (data, item) =>{ 
    for(let pro of products){
     if (pro.title == newProduct.title){
        return true
     }
    }
    return false;
};
if ((!find.title)) products = [...products, {id:id, title:title, description:description, price:price }]


console.log("isfound", find(products, newProduct));

const getId = (y) => {
        return y[products.length -1].id
        
      }
    
const getNewId = (x) => {
        return x[products.length].id +1
      }
  res.send(products);

});


router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});
router.delete('/', function(req, res) {
  res.send('');
})


module.exports = router;
