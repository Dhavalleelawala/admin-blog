const express = require("express");
const cookie = require("cookie-parser");
const app = express();

const port = 8081;

const path = require('path');
const { db } = require("./config/database");

app.set('view engine', 'ejs');
app.use(cookie());

app.use(express.static(path.join(__dirname + '/assets')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routers'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    db();
    console.log("server start \nhttp://localhost:" + port);

})
