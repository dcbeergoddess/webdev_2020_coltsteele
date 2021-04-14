const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = { 
  secret: 'thisisnotagoodsecret', 
  resave: false, 
  saveUninitialized: false 
};
app.use(session(sessionOptions));

//SESSIONS EXAMPLE
app.get('/viewcount', (req, res) => {
  if(req.session.count){
    req.session.count += 1
  } else {
    req.session.count = 1
  }
  res.send(`You have viewed this page ${req.session.count} times`)
})

//NEW ENDPOINT EXAMPLE
/*
- expect you to pass a query string in, and in that query string i want you to pass in your username --> give default value if you do not pass in --> add that to session --> if you go to /register --> you will be registered in our session
*/
app.get('/register', (req, res) => {
  const { username = 'Anyonymous'} = req.query;
  req.session.username = username;
  res.redirect('/greet')
})

app.get('/greet', (req, res) => {
  const { username } = req.session;
  res.send(`Welcome Back, ${username}`)
})

app.listen(8080, (req, res) => {
  console.log('SERVING!')
})