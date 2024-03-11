const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
// const Expenses = require("./models/expenseList");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const expenseListRoutes = require('./routes/expenseListRoutes');

app.use("/api", expenseListRoutes);

sequelize
// .sync({force: true})
  .sync()
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((err) => console.log("Error connecting to database", err));
