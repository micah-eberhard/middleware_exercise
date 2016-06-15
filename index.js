'use strict';

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var pg = require('pg');


app.use(express.static(__dirname + "/public"));


//Write your own middleware function with app.use - to console log the request url path for every route.
app.use(function(req, res, next){
  console.log("Request: " + req.url);
  next();
});

//Write your own middleware that restricts access to /users/auth so that when you attempt to
//access that route, you get sent to the home page ('/') - look up how to use res.redirect();
app.use('/users/auth', function(req, res, next){
  setTimeout(function(){
    res.redirect('/home');
  }, 2000);
  //next();
});



app.get('/home', function(req, res, next){
  res.render('home', {});
  res.end();
});

app.get('/users/auth', function(req, res, next){
  res.render('users', {});
});

app.get('/api/:things', function(req, res, next){
  if(req.params.things === 'err')
  {
    next("This is an error", req, res, next);
  }
  else {
    res.end();
  }
});


//Write your own middleware ERROR function using app.use to display an error message when it gets used through next()
//Reference the docs: http://expressjs.com/en/guide/using-middleware.html
app.use(function(err, req, res, next){
  console.log("Error: ");
  console.log(err);
  res.write(JSON.stringify(err));
  res.end();
});



var port = 3000;
app.listen(port, function(){
  console.log("App listening on: " + port);
});
