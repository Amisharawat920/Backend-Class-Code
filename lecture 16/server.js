const express = require('express');
const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
    console.log("Req url:", req.url, "time", new DataTransfer().tolocalestring());
    // res.send("hello from middleware");
    next();
};

app.use(logMiddleware);


app.get('/', (req, res) => {
    console.log("Homepage visited");
    res.send('Hello World!');
});


app.get('/about', (req, res) => {
    console.log("about page visited");
    res.send('Hello about page!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 