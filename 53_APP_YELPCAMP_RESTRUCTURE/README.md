# YelpCamp: Restructuring & Flash
- [GITHUB REPO CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/36c5c12fc8b21699d7e129d661c80b3e795da801)

## Breaking Out Campground Routes
1. `mkdir routes` in root directory
2. `touch routes/campgrounds.js`
3. add `express` & `router` 
```js
const express = require('express');
const router = express.Router();
```
4. paste in campground routes, change `app` to `router`
5. export module `module.exports = router;`
6. require campground router in `app.js`
```js 
const campgrounds = require('./routes/campgrounds');
```
7. set up middleware -->  w/ route and the path you want to prefix them with
```js
app.use('/campgrounds', campgrounds)
```
8. update routes in router file and require in `catchAsync`, `ExpressError`, `Campground`, Middleware for `validateCampground`, and require `campgroundSchema` for `JOI` --> update paths otherwise --> error
```js
const catchAsync = require('../utils/catchAsync');
const { campgroundSchema } = require('../schemas.js');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');

//JOI VALIDATION
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  } else {
    next();
  }
};

```

## Breaking Out Review Routes
- We Do Same Thing for a Review Router 
- NOW WE HAVE ERROR WHEN SUBMITTING A NEW REVIEW
![error for review routes](assets/error1.png)
```js
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);
  campground.reviews.push(review);
```
- cannot get campground --> cannot find by id --> return empty object in `req.params`
- `app.use('/campgrounds/:id/reviews', reviews);` --> need to be able to use the params to get this id
- ROUTERS GET SEPARATE PARAMS --> specify option in router --> `mergeParams: true`
```js
const express = require('express');
const router = express.Router({ mergeParams: true });
```
- Campgrounds is fine because the id we need is all defined in those routes 

## Serving Static Assets
- we need to add in our public directory and serve our static assets so that we could have images, custom stylesheets, and JavaScript
1. `mkdir public` in root directory
2. test with `touch public/hello.js` --> `alert("HELLO FROM THE PUBLIC DIRECTORY")` --> goal is to make sure we can include this in our response
3. in `boilerplate.ejs` --> set up script tag to include that script --> `<script src='/hello.js'></script>` --> public is not being served yet so this is not going to work
![error on serving up public asset](assets/error2.png)
4. We need to tell express to server our public directory --> in `app.js`
```js
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
```
5. TEST IN LOCALHOST:
![alert being served up in boilerplate layout](assets/success1.png)
6. LETS MOVE BOOTSTRAP SCRIPT TO NEW PUBLIC FILE
7. ADD IN SCRIPT TO BOILERPLATE:
```html
  <!-- PUBLIC ASSETS -->
  <script src='/validateForms.js'></script>
```
8. may want to break up public folder into `scripts` & `stylesheets`
```js
 <script src='/javascripts/validateForms.js'></script>
```
9. Add Path to Middleware
```js
//MONGOOSE MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
//PUBLIC MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));
```
10. UPDATE NOW SINCE WE KNOW --> FOR MONGOOSE FINDBYANDMODIFY DEPRECIATION WARNING
```js
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
});
```

## Configuring Session
- SET UP EXPRESS SESSION --> TO USE FLASH --> SHORTLY WE WILL ADD AUTHENTICATION
1. `npm i express-session`
2. in app.js `const session = require('express-session')
3. to set up --> have a lot we could configure --> will come back once we deploy and get our app up and running and we have `production` vs `development`, etc.
```js
//SESSION MIDDLEWARE
const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionConfig));
```
4. See if we get cookie served up for our session id `connect.sid` when we make a request in local host:
![Session ID Working with request](assets/success2.png)

5. set up some fancier options for the cookie itself that we send back
```js
const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    //have cookie expire after week
    //Date.now() --> produces date in milliseconds
    // Date.now() + milliseconds * seconds * minutes * hours * days
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};
```
6. Cookie we get back now has an expiration date on it that expires a week from time of request
![Expiration Date on Cookie](assets/success3.png)

- We will circle back and do a ton more security but for now we are going to set this while we're setting up our session
- [HttpOnly Info](https://owasp.org/www-community/HttpOnly)
- BASIC SECURITY 
```js
const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    //BASIC SECURITY
    httpOnly: true, 
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};
```

## Setting Up Flash

## Flash Success Partial

## Flash Error Partial