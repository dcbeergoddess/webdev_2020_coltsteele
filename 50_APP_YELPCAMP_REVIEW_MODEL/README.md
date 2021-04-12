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

## Creating Reviews

## Validating Reviews

## Displaying Reviews

## Styling Reviews

## Deleting Reviews

## Campground Delete Middleware