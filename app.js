const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_URL, () =>
  console.log("Connected to DB")
);

app.listen(PORT, () => {
  console.log(`Server started and running on port ${PORT}`);
});
