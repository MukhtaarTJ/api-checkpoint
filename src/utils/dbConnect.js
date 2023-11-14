const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL2 = process.env.MONGO_URL2;

const mongoConnect = async () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("db connection is ready..."))
    .catch((error) => console.log(error));
};

module.exports = mongoConnect;
