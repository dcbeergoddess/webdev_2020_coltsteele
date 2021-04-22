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
- Update to only see edit/delete buttons if you are the author
- AUTHORIZATION
- TWO THINGS: 
1. Don't show these buttons unless you are logged in as author of campground: Add logic into show template using `campground.author` and `currentUser._id`
- `campground.author.equals(currentUser._id)` --> will break things if no user is logged in w/ out checking if currentUser exists first
```html
    <% if (currentUser && campground.author.equals(currentUser._id)) { %>
        <div class="card-body">
          <a class="card-link btn btn-info" href="/campgrounds/<%= campground._id %>/edit ">Edit Campground</a>
          <form class="d-inline" action="/campgrounds/<%=campground._id%>?_method=DELETE" method="POST">
            <button class="btn btn-danger">Delete</button>
          </form>
        </div>
      <% } %>
```
- 2. Protect Routes on Backend --> someone could send delete, patch, put request if they are not the owner (Postman, etc.)  

## Campground Permissions
- Right now you can send request via Postman or just add edit into path in localhost -> also able to delete and more via Postman
- Before we update anything does this campground have the same author id as the currently logged in user:
1. Need to break logic in update campground route up --> find campground first --> then check to see if we are allowed to update based on if the id of the current user matches the author id in the model:
```js
//PUT ROUTE TO UPDATE
router.put('/:id', isLoggedIn, validateCampground, catchAsync(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if(!campground.author.equal(req.user._id)) {
    req.flash('error', 'You do not have permission to do that');
    return res.redirect(`/campgrounds/${id}`); //return to make sure it works and none of the other code runs
  }
  const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground}); //this is janky but check to make sure it works
  req.flash('success', 'Successfully updated campground!')
  res.redirect(`${campground._id}`);
}));
```
- try to hit edit route on our own hitting it in the path to update a campground you did not create:
- ![Cannot Update Campground](assets/user2.png)
- Sign in as user for campground:
- ![Success Msg for Update Campground](assets/user3.png)
2. Can add it to other routes

## Authorization Middleware

## Reviews Permissions

## More Reviews Authorization
