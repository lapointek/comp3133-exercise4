const express = require("express");
const mongoose = require("mongoose");
const User = require("./schema/User");

const app = express();
const port = 3000;

app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://klapointe:lG8K3AQ4EI6rZYaN@ex4-comp3133.obzlg.mongodb.net/comp3133-ex4?retryWrites=true&w=majority&appName=ex4-comp3133",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to mongoDB: ", err));

app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch {
        res.status(400).json({ message: err.message });
    }
});

app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
