var express = require('express');
var router = express.Router();
var shopifyAPI = require('shopify-node-api');


var Shopify = new shopifyAPI({
    shop: 'hstraining.myshopify.com', // MYSHOP.myshopify.com 
    shopify_api_key: '8f3d93dba834585dab5b9a5f2da7c053', // Your API key 
    access_token: '3c0f873e873f7afb0fa6936cfbd37ac6' // Your API password 
  });


/* GET users listing. */
router.get('/', function(req, res, next) {
  Shopify.get('/admin/products.json', "fields=id,images,title",function(err, data, headers){
         res.render('index', { data: data}); 
         console.log('lkgl');
  });
});

module.exports = router;