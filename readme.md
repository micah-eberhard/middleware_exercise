#Middleware Exercises

- Write your own middleware function with app.use - to console log the request url path for every route.

- Write your own middleware that restricts access to /users so that when you attempt to access that route (you can use the link in /home), you get sent back to the home page ('/home') instead of viewing the users page. - look up how to use res.redirect(); -- How could you achieve a similar goal without redirecting?

- Write your own middleware ERROR function using app.use to display an error message when it gets used through next()
> Check out the /err/:msg route for an easy way to test this function.
> Reference the docs: http://expressjs.com/en/guide/using-middleware.html


- Install Morgan: https://www.npmjs.com/package/morgan
- In your terminal:
> ```npm install --save morgan```

- In your index.js:
```javascript
var logger = require('morgan');
app.use(logger('dev'));
```
> Observe the output of morgan as well as your own req.url console log middleware, they do similar things don't they?

  > Challenge: Instead of using morgan's pretty output, expand on your own logging middleware to mimic morgan.


- Write a simple form in the home.ejs file which lets the user submit their mailing info (name, address, city, state, zip) - this form should use the method 'POST' (not GET) to /info

- Write a route in youre index.js file using app.post(...) for /info.

- Make use of the body-parser middleware which was discussed earlier in the lesson to access the variables that get sent from your form to your new post route at /info


- In your terminal:
``` javascript
  createdb middleware
  psql middleware -f ./data/build.sql
```


- Now that you have access to your form's data through body-parser, and you have a database with a table (use psql, \c middleware, then \dt -- to make sure the SQL file ran properly). You should be able to use the user submitted info, and insert it into your database.

- Implement your error handler middleware in your SQL calls when checking if there was an error.

- STRETCH: Write a GET request for /info that returns all the rows in the users table, then use this information to render a new template or partial (your choice) with a nicely formatted table containing a row for each user.
