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

## Configuring Session

## Setting Up Flash

## Flash Success Partial

## Flash Error Partial