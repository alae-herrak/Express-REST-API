const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users");
require("dotenv").config();

app.use(bodyParser.json());
app.use("/users", usersRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server started and running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`connexion to DB failed: ${err}`);
  });
