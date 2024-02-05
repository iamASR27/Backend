// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.use('/', (req, res, next) => {
    // console.log("This always runs!")
    next();
})

app.use('/add-product', (req, res, next) => {
    // console.log("In add-product middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><input type="number" name="size" /><button type="submit">Add Product</button></form>');
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    // console.log("In another middleware");
    res.send('<h1>Hello from Express</h1>');
    // res.send( { key1: "value" });
})

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);

