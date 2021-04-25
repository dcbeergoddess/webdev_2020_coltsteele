# YelpCamp: Controllers & Star Ratings
* [GITHUB CODE FOR SECTION](https://github.com/Colt/YelpCamp/tree/e8357458ec6df5a9c97d4bef4d5671ed8d1e760a)

## Refactoring To Campgrounds Controller
- Breaking some logic out of our routes --> still have more functionality to add
- Pattern is not unique to Express
- Controllers --> files that export an object where we move some functionality
* MVC --> controllers --> a pattern --> Model View Controller
* `mkdir controllers`
* `touch controllers/campgrounds.js`
- For Get All Campgrounds Route
```js
const Campground = require('../models/campground');

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
}
```
- in `routes/campgrounds.js`
```js
const campgrounds = require('../controllers/campgrounds')
```
- now we have a controller object with a bunch of methods on it available to us
```js
//INDEX
router.get('/', catchAsync(campgrounds.index));
```

## Adding a Reviews Controller
- Duplicate same process for users and reviews controller
* Example of new file structure and controller logic for Users
- ![Example](assets/users1.png)

## A Fancy Way to Restructure Routes
- Grouping routes together
- [EXPRESS ROUTER DOCS](https://expressjs.com/en/4x/api.html#router)
- ![Example](assets/router1.png)
- EXAMPLE OF RESTRUCTURED CAMPGROUND ROUTES:
```js
const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

router.route('/')
  .get(catchAsync(campgrounds.index))
  .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));

//NEW FORM --> needs to be before /:id
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
  .get(catchAsync(campgrounds.showCampground))
  .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

//UPDATE FORM
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));
```
- a little more restructuring to make our code look cleaner:
```js
router.route('/:id')
  .get(catchAsync(campgrounds.showCampground))
  .put(isLoggedIn, 
    isAuthor, 
    validateCampground, 
    catchAsync(campgrounds.updateCampground))
  .delete(isLoggedIn, 
    isAuthor, 
    catchAsync(campgrounds.deleteCampground));
```

## Displaying Star Ratings
* [Starability CSS](https://github.com/LunarLogic/starability)
- Can do by scratch --> loop over and do manually
* ![star entity number](assets/star1.png)
- So we could do this... but we are not:
* ![star entity number](assets/star2.png)
- would have to loop over and figure out how many entity codes to display and also does not help with accessibility when it comes to showing the stars
- USE STARABILITY CSS FILE
* Allow a user to rate using rate selector
* Copy code from github and add stylesheet for basic starts in public folder
- in show campground template test css file:
```html
  <h3>Rated element name</h3>
  <p class="starability-result" data-rating="3">
    Rated: 3 stars
  </p>
```
- Change data-rating to be review.rating
```html
  <h3>Rated element name</h3>
  <p class="starability-result" data-rating="<%= review.rating %>">
    Rated: <%= review.rating %>
  </p>
```

## Star Rating Form




