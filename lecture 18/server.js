const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!" });
    }
});

app.get("/age-check/:age", (req, res) => {
    // let age = 17;
    let age = req.params.age;
    try {
        if (age < 18) {
            throw new Error("You are eligible to vote");
        } else {
            res.send("You are eligible to vote");
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Age is less than 18" });
    }
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));