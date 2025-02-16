const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = 3000;

app.use(express.json());

mongoose
    .connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to mongoDB: ", err));
