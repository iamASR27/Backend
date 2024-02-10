const express = require('express');

// const path = require('path');

// const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

// router.get('/add-product', (req, res, next) => {
//     res.send('<form action="/admin/product" method="POST"><input type="text" name="title" /><input type="number" name="size" /><button type="submit">Add Product</button></form>');
// })

// /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//     // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
//     res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// })

router.get('/add-product', productsController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)

// router.post('/add-product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

// router.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

module.exports = router;