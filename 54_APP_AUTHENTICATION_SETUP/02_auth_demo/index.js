const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session')

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
app.use(session({ secret: 'notagoodsecret'}));

const requireLogin = (req, res, next) => {
  if(!req.session.user_id){
    return res.redirect('/login');
  }
  next();
};

//HOME PAGE
app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE');
});
//REGISTER FORM
app.get('/register', (req, res) => {
  res.render('register');
});
//CREATE USER
app.post('/register', async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash
  })
  await user.save();
  req.session.user_id = user._id;
  res.redirect('/secret')
});
//LOGIN PAGE
app.get('/login', (req, res) => {
  res.render('login');
});
//POST LOGIN FORM
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if(foundUser){
    req.session.user_id = foundUser._id;
    res.redirect('/secret');
  } else {
    res.redirect('/login');
  }
});
//LOG OUT
app.post('/logout', (req, res) => {
  // req.session.user_id = null;
  //CAN ALSO USE THIS IF THERE IS MORE INFO ATTACHED TO USER SESSION WITH INFO BEING STORED
  req.session.destroy();
  res.redirect('/login');
});

//SECRET ROUTE 
app.get('/secret', requireLogin, (req, res) => {
  res.render('secret')
}); 
app.get('/topsecret', requireLogin, (req, res) => {
  res.send("TOP SECRET")
});

app.listen(3000, () => {
  console.log('Serving your app')
});