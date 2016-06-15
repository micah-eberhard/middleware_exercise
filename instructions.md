- Write your own middleware function with app.use - to console log the request url path for every route.

- Write your own middleware that restricts access to /users/auth so that when you attempt to access that route (use the link in /home), you get sent back to the home page ('/home') instead of viewing the users page. - look up how to use res.redirect(); -- How could you achieve a similar goal without redirecting?

- Write your own middleware ERROR function using app.use to display an error message when it gets used through next()

- Reference the docs: http://expressjs.com/en/guide/using-middleware.html


- Write a simple form in the home.ejs file which lets the user submit their mailing info (name, address, city, state, zip) - this form should use the method 'POST' (not get) to /info

- Write a route in youre index.js file using app.post(...) for /info.

- Make use of the bodyparser middleware which was discussed earlier in the lesson to access the variables that get sent from tour form to your new post route at /info
