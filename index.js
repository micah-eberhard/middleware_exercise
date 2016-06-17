'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

var pg = require('pg');

// var logger = require('morgan');
// app.use(logger('dev'));


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));


//Write your own middleware function with app.use - to console log the request url path for every route.

//Write your own middleware that restricts access to /users so that when you attempt to
//access that route, you get sent to the home page ('/') - look up how to use res.redirect();
app.use(function(req, res, next) {
    if (req.url === '/user') {
        res.redirect('/home');
    } else {
        console.log(req.url);
        next();
    }
});
app.get('/home', function(req, res, next) {
    res.render('home', {});
    res.end();
});

app.get('/users', function(req, res, next) {
    res.render('users', {});
});

app.get('/err/:msg', function(req, res, next) {
    if (req.params.msg === 'error') {
        next({
            err: req.params.msg
        }, req, res, next);
    } else {
        res.write("Must not be an error...");
        res.end();
    }
});


//Write your own middleware ERROR function using app.use to display an error message when it gets used through next()
//Reference the docs: http://expressjs.com/en/guide/using-middleware.html
app.use(function(err, req, res, next) {

    console.error(err.stack);
    res.status(500).send('AHH BROKEN');

});

app.post('/info', function(req, res) {
    if (err) {
        console.log(err);
    } else {
        client.query('INSERT INTO kittens (name) VALUES($1)', [req.body.kitten.name], function(err, data) {
                if (err) {
                    return console.error('error querying database', err);
                }
                res.redirect('/kittens');
            }
        );
}


var port = 3000;
app.listen(port, function() {
    console.log("App listening on: " + port);
});
