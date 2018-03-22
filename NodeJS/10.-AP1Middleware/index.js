const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

const usersRouter = require('./api/users');
const tweetsRouter = require('./api/tweets');

app.get('/', (req, res) => {
    res.send("papa");
});

app.use('/users', usersRouter);

app.use('/tweets', tweetsRouter);

app.listen(3000, (error) => {
    console.clear();
    console.log("Server listen in port 3000");
});