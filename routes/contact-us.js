const express = require('express');

// const path = require('path');

// const rootDir = require('../util/path');
const contactController = require('../controllers/contactUsController')

const router = express.Router();

router.get('/contact-us', contactController.getContact)
// router.get('/contact-us', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
// })

router.post('/contact-us', contactController.postContact)
// router.post('/contact-us', (req, res, next) => {
//    res.redirect('/success');
// })

module.exports = router;