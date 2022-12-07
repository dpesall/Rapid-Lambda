require('dotenv').config();

const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public/'));

app.get('/technology/introduction-to-penetration-testing', function(req,res) {
    fs.readFile('public/technology/introduction-to-penetration-testing.html',   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
});

app.get('/user_guide', function(req,res) {
    fs.readFile('public/user_guide.html',   function (err, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
});

app.listen(8081,()=>{
    console.log('Web Server running on port', 8081);
});