const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(chatRoutes);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page Not Found</h1>');
// })

app.listen(3000);