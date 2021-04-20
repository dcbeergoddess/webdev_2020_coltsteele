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

## Register Form

## Register Route Logic

## Login Routes

## isLoggedIn Middleware

## Adding Logout

## currentUser Model

## Fixing Register Route

## ReturnTo Behavior
- [SOLUTION FOR SMALL BUG IN CODE](https://www.youtube.com/watch?v=g7SaXCYCgXU)