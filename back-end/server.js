// main libraly
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// connected database to create model
const db = require("./models");

const testService = require("./services/testService");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.sequelize.sync({ force: false }).then(() => {
    testService(app, db);

  app.listen(9876, () => {
    console.log("server is running");
  });
});
