const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     // let { query } = req.query;
//     // console.log(query);
//     console.log("Hi, I am 1st middleware");
//     next();
//     // console.log("This is after next");
// });

// app.use((req, res, next) => {
//     // let { query } = req.query;
//     // console.log(query);
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

//logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token == "giveaccess") {
        next();
    }
    throw new Error("ACCESS DENIED");
}

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) =>{
    console.log("---------------ERROR--------------");
    next(err);
});

app.use((err, req, res, next) =>{
    console.log("---------------ERROR2 Middleware--------------");
    next(err);
});

// app.use((req, res) => {
//     res.status(404).send("Page not found");
// });

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});