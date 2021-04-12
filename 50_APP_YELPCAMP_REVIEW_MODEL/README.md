# YelpCamp: Adding The Reviews Model
- [Colt's Github Code for This Section](https://github.com/Colt/YelpCamp/tree/6a78de4041b853f65d681cf77784db637384f432)

## Defining The Review Model
- Review Model - Numeric Rating and Text
1. Create Model: `models/review.js`
```js
//Create Schema
const reviewSchema = new Schema({
  body: String, //TEXT
  rating: Number //probably 1-5
});
```
2. Connect Review w/ Campground --> One to Many Relationship | What Implementation?
* We Will Embed an array of ObjectId's in Each Campground --> potential to have thousands of reviews
3. Update Campground Schema:
```js
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
```

## Adding the Review Form
- Add Form to Make New Review --> Make Review in Context of Individual Campground 
1. Add Form on `views/campground/show.ejs` --> Nothing Fancy yet :) --> inside col on card
* FOR LABEL: `class="form-label"` --> bootstrap
* FOR TEXT-AREA: `class="form-control"` --> bootstrap
* FOR RANGE INPUT: `class="form-range"` --> bootstrap
```html
    <h2>Leave a Review</h2>
    <form action="">
      <div class="mb-3">
        <label class="form-label" for="rating">Rating</label>
        <input class="form-range" type="range" min="1" max="5" name="review[rating] "id="rating">
      </div>
      <div class="mb-3">
        <label class="form-label" for="body">Review</label>
        <textarea class="form-control" name="review[body]" id="body" cols="30" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-success">Submit</button>
      </div>
    </form>
```


## Creating Reviews

## Validating Reviews

## Displaying Reviews

## Styling Reviews

## Deleting Reviews

## Campground Delete Middleware