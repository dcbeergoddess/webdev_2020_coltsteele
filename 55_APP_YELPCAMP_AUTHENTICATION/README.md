# YelpCamp: Adding Authentication
* [YelpCamp GITHUB CODE For this section](https://github.com/Colt/YelpCamp/tree/291b1146dfd2e0449b90aed6c3b20cdeda8a0485)

## Introduction to Passport
* [Passport Docs](http://www.passportjs.org/)
* [Passport-Local](https://github.com/jaredhanson/passport-local)
* [Passport-Local-Mongoose](https://github.com/saintedlama/passport-local-mongoose)
- Learned Authentication from Scratch to better understand how Passport is working in your APP --> better scalability --> create logins using twitter, google, facebook, etc. with `passport.js`
- It Hides Stuff if you don't understand what it does behind the scenes --> bcrypt --> hashing --> session --> passwords
- we are going to use `passport-local` --> one `strategy`
- INSTALL PASSPORT w/ PASSPORT-LOCAL & PASSPORT-LOCAL-MONGOOSE
1. `npm i passport passport-local passport-local-mongoose` 

## Creating Our User Model
- Create our User Model
- FROM PASSPORT-LOCAL MONGOOSE DOC:
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
```
* FOR YelpCamp:
1. `touch models/user.js`
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//DEFINE USER SCHEMA
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});
//THIS WILL ADD onto our schema --> username --> field for password --> make sure usernames are unique --> and give us some additional methods that we can use
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
```

## Configuring Passport
- Our `app.js` is getting a little heavy --> eventually break up a lot of what is in here, but for now...
1. set up passport in `app.js`
* FEW LINES TO REQUIRE IN AT TOP OF FILE
```js
const passport = require('passport');
const LocalStrategy = require('passport-local');
```
* SET UP MIDDLEWARE --> Make sure it is after `app.use` for `session`
```js
app.use(passport.initialize());
app.use(passport.session());
```
* Require in `User` model to `app.js` --> for next line
```js
//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
```
- FROM PASSPORT DOCS:
- ![Static Methods in Passport](assets/passport1.png)
- A few more methods to add in `app.js`
```js
//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); 
//Can have multiple strategies going at once

passport.serializeUser(User.serializeUser()); //start session
passport.deserializeUser(User.deserializeUser()); //Take out of session
```
* Demonstrate creation of new user with following route --> `register` method in passport --> pass in new user object and a password (will hash password and store it --> need to await it since it will take time)
```js
//NEW USER DEMONSTRATION
app.get('/fakeUser', async (req, res) => {
  const user = new User({email: 'rachel@gmail.com', username: 'rrrrachel'});
  const newUser = await User.register(user, 'jasmine');
  res.send(newUser);
});
```
* HIT ROUTE IN LOCAL HOST:
![User Object Stored w/ hash password](assets/passport2.png)
* Uses Hash Algorithm `Pbkdf2` --> Platform independent

## Register Form
* Set up Simple and Ugly Register Form 
- `/register` --> FORM
- `POST /register` --> CREATE A USER
1. `touch routes/users.js`
```js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

//RENDER FORM
router.get('/register', (req, res) => {
  res.render('users/register')
});

module.exports = router;
```
2. `mkdir views/users`
3. `touch views/users/register.ejs`
```html
<h1>REGISTER!</h1>
```
4. require routes in `app.js` and set up middleware
```js
//routers
const userRoutes = require('./routes/users')
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
```
```js
//ROUTER MIDDLEWARE
app.use('/', userRoutes)
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);
```
5. Test to see that `register.ejs` template shows up in local host when you hit the register route
* NEW EJS TEMPLATE FOR REGISTER
```html
<% layout('layouts/boilerplate') %> 
<h1>Register</h1>
<form action="/register" method="POST" class="validate-form" novalidate>
  <div class="mb-3">
    <label class="form-label" for="username">Username</label>
    <input class="form-control" type="text" id="username" name="username" required>
    <div class="valid-feedback">
      Looks Good!
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label" for="email">Email</label>
    <input class="form-control" type="email" id="email" name="email" required>
    <div class="valid-feedback">
      Looks Good!
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label" for="password">Password</label>
    <input class="form-control" type="password" id="password" name="password" required>
    <div class="valid-feedback">
      Looks Good!
    </div>
  </div>
  <button class="btn btn-success">Register</button>
</form>
```
6. Set up post route for register
```js
//POST FORM
router.post('/register', async (req, res) => {
  res.send(req.body); //TEST TO MAKE SURE WE ARE GETTING EVERYTHING WE SENT
})
```
7. TEST IN LOCAL HOST:
* ![REQ.BODY REGISTER TEST](assets/register1.png)

## Register Route Logic

## Login Routes

## isLoggedIn Middleware

## Adding Logout

## currentUser Model

## Fixing Register Route

## ReturnTo Behavior
- [SOLUTION FOR SMALL BUG IN CODE](https://www.youtube.com/watch?v=g7SaXCYCgXU)