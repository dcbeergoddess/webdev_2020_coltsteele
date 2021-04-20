const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');

mongoose
  .connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!");
    console.log(err);
  });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
//REGISTER FORM
app.get('/register', (req, res) => {
  res.render('register');
});
//CREATE USER
app.post('/register', async (req, res) => {
  const { password, user } = req.body;
  const hash = await bcrypt.hash(password, 12);
  res.send(hash);
});
//SECRET ROUTE 
app.get('/secret', (req, res) => {
  res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN')
});

app.listen(3000, () => {
  console.log('Serving your app')
});