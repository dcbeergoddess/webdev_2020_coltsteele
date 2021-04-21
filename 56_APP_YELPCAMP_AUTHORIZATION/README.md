# YelpCamp: Basic Authorizaation
* [GITHUB CODE FOR SECTION](https://github.com/Colt/YelpCamp/tree/40d8f37a93d140b53a59ee847e3bed3aeb94ecc4)

## Adding an Author to Campground
- Connect User Model to Particular Campgrounds and Particular Reviews
- in Campground Model:
```js
//CREATE SCHEMA
const CampgroundSchema = new Schema ({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});
```
- Grab ID of user from database `608056f48d40d841ba08c88d` and use in `seeds/index.js` to attach author to new seeded DB:
```js
const camp = new Campground({
  author: '608056f48d40d841ba08c88d',
    location: `${cities[random1000].city}, ${cities[random1000].state}`,
    title: `${sample(descriptors)} ${sample(places)}`, 
    image: 'https://source.unsplash.com/collection/483251',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt maiores consectetur asperiores iure obcaecati quia voluptatum ipsa error, optio illo molestiae enim voluptatem itaque suscipit? Culpa excepturi libero deleniti.',
    price //shorthand do not need price: price 
});
```
- add author to show page for campgrounds:
1. need to populate to get author in campground show route:
```js
router.get('/:id', catchAsync(async (req, res) => {
  const campground = await Campground.findById(req.params.id).populate('reviews').populate('author');
  if(!campground){
      console.log(campground); //TEST OUTPUT
    req.flash('error', 'Cannot find that campground');
    return res.redirect('/campgrounds');
  }
  //TEST THAT IT'S WORKING WITH CAMPGROUND
  // console.log(campground);
  res.render('campgrounds/show', { campground });
}));
```
- IN TERMINAL:
- ![CAMPGROUND PRINT OUT](assets/user1.png)
- we know have access to username under the key `author`
2. In Show Campground Template:
```html
     <ul class="list-group list-group-flush">
        <li class="list-group-item text-muted"><%= campground.location %></li>
        <li class="list-group-item">Submitted by <%= campground.author.username %></li>
        <li class="list-group-item">$<%= campground.price %>/night</li>
      </ul>
```
3. Update our Campground Route where we create a campground, associate the campground being created with the currently logged in user because we are verifying that a user is logged in
```js
//POST NEW CAMPGROUND ROUTE
router.post('/', isLoggedIn, validateCampground, catchAsync(async (req, res, next) => {
  // if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
  const campground = new Campground(req.body.campground);
  campground.author = req.user._id;
  await campground.save();
  req.flash('success', 'Successfully made a new campground!');
  res.redirect(`campgrounds/${campground._id}`);
}));
```

## Showing and Hiding Edit/Delete

## Campground Permissions

## Authorization Middleware

## Reviews Permissions

## More Reviews Authorization
