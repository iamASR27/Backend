const express = require('express');

// const path = require('path');

// const rootDir = require('../util/path');
const productsController = require('../controllers/products')

const router = express.Router();

router.get('/', productsController.listProduct)
// router.get('/', (req, res, next) => {
//     // res.send('<h1>Hello from Express</h1>');
//     // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// })

module.exports = router;