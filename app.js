// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contact-us');
const successRoutes = require('./routes/success');

// app.use((req, res, next) => {
//     console.log("In the middleware");
//     next(); //Allows the request to continue to the next middleware in line
// })

// app.use((req, res, next) => {
//     console.log("In another middleware");
//     res.send('<h1>Hello from Express</h1>');
//     // res.send( { key1: "value" });
// })

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);
app.use(successRoutes);

app.use(errorController.get404);
// app.use((req, res, next) => {
//     // res.status(404).send('<h1>Page Not Found</h1>');
//     res.status(404).sendFile(path.join(__dirname, 'views', '404Error.html'));
// })

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);

