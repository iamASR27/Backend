const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const Appointment = require('./models/Appointment');

const appoinmentRoutes = require('./routes/appointmentRoutes');

app.use("/appointment", appoinmentRoutes);

sequelize
// .sync({ force: true })
  .sync()
  .then(() => {
    console.log("Database connection successful")
    app.listen(3000);
})
  .catch((err) => console.error("Error connecting to database", err));
