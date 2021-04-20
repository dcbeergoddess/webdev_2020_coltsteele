const express = require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('./models/user')

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

app.get('/register', (req, res) => {
  res.render('register');
})

app.post('/register', async (req, res) => {
  res.send(req.body);
})

app.get('/secret', (req, res) => {
  res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN')
});

app.listen(3000, () => {
  console.log('Serving your app')
});