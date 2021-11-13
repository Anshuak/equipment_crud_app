const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const ConnectToDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      console.log("DB Connection Failed");
    });
};

module.exports = ConnectToDB;
