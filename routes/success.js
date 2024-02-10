const express = require('express');

// const path = require('path');

// const rootDir = require('../util/path');
const contactController = require('../controllers/contactUsController');

const router = express.Router();

router.get('/success', contactController.getSuccess);
// router.get('/success', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'views', 'success.html'))
// });


module.exports = router;