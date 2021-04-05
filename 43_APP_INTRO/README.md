# INTRO TO YELP-CAMP

- [COLT's GITHUB CODE: FIRST SECTION](https://github.com/Colt/YelpCamp/tree/c12b6ca9576b48b579bc304f701ebb71d6f9879a)
- [MY GITHUB REPO: YelpCamp]()

## MY APP
### FIRST STEPS
* Create GitHub Repo
* Clone into Project File
* Create Basic Express App
* Set up VIEWS 

### CREATE MODEL
* Campground Model
* Create Schema
* `const Schema = mongoose.Schema;` = MAKE A SHORTCUT

* Connect to mongoose in `app.js` --> new from farmStand:
<hr>

```js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database Connected')
});

const app = express();
PORT = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});


// END OF FILE
app.get('*', (req, res) => {
  res.send(`I DO NOT KNOW THAT PATH!!!!`)
})
app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}` )
}); 
```
<hr>

* Create HARD CODED Route to test Mongoose Connection
<hr>

```js
// HARD CODE ROUTE TO TEST Mongoose 
app.get('/makecampground', async (req, res) => {
  const camp = new Campground({ title: 'My Backyard', description: 'cheap camping!' });
  await camp.save();
  res.send(camp);
});
```
![TEST IN LOCALHOST:](assets/testRoute.png)
<hr>

### SEED DATA
- copied `cities.js` and `seedsHelper.js` into project into `seeds` directory
- created `index.js` in `seeds` directory - self-contained file to connect to mongoose and use my model.
* COPY OVER FROM `app.js`
<hr>

```js
const mongoose = require('mongoose');
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true, 
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database Connected')
});
```
<hr>

* START BY ERASING EVERYTHING IN DB and TEST:
```js
const seedDB = async () => {
    await Campground.deleteMany({});
    const c = new Campground({title: 'purple field'});
    await c.save();
}

seedDB();
```
* IN TERMINAL
1. `node seeds/index.js`
2. CHECK IN MONGO - `use yelp-camp` --> `db.campgrounds.find()`

* ADD LOGIC FOR SEED DATA - Require cities data in `seeds/index.js`
```js

```
* CREATE 50 RANDOM locations from `seeds/cities.js`
<hr>

```js
//CREATE 50 NEW CAMPGROUNDS
const seedDB = async () => {
    await Campground.deleteMany({});
    //CREATE LOOP FOR DATA - 50 times
    for(let i = 0; i < 50; i++){
        //random number to pick city[from 1000 city array]
        const random1000 = Math.floor(Math.random() * 1000);
        //make new Campground - location: city, state
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`
        });
        await camp.save()
    }
};

seedDB();
```
<hr>

* GIVE DATA NAME --> TITLE --> use places and descriptors from `seeds/seedsHelper.js` and import to `seeds/index.js`:
```js
const {places, descriptors} = require('./seedHelpers')
```
* Want pick random `place` and random `descriptor` and put them together
- PICK A RANDOM ELEMENT FROM ARRAY - `array[Math.floor(Math.random() * array.length)]` --> Add Logic to `seedDB`:
<hr>

```js
//GRAB RANDOM ELEMENT FROM AN ARRAY
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    //CREATE LOOP FOR DATA - 50 times - 50 cities
    for(let i = 0; i < 50; i++){
        //random number to pick city[from 1000 city array]
        const random1000 = Math.floor(Math.random() * 1000);
        //make new Campground - location: city, state
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        });
        await camp.save()
    }
};

seedDB().then;
```
<hr>

* Make seed file connection close after file is seeded into DB
```js
//seedDB returns a promise because it is an async function .then--> close connection
seedDB().then(() => {
    mongoose.connection.close();
});
```

### Campground Index
- Create route to populate entire index of campgrounds
```js
//INDEX
app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
});
```
- Create view to populate index titles to test
```html
  <ul>
    <% for( let campground of campgrounds ) { %>
    <li><%= campground.title %> </li>
    <% } %>
  </ul>
```
### Campground Show
- Details page for a Campground
- Set up Route
```js
//SHOW
app.get('/campgrounds/:id', async (req, res) => {
  res.render('campgrounds/show');
})
```
- Set up Template for Show Page
- Make Titles in Index Page link to it's Details
```html
  <h1>All Campgrounds</h1>
  
  <ul>
    <% for( let campground of campgrounds ) { %>
    <li><a href="/campgrounds/<%=campground._id%>"><%= campground.title %></a></li>
    <% } %>
  </ul>
```
- Set up `findById()` in show route - Show title and location from now
```js
//SHOW
app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/show', { campground });
})
```
- Use Info in `show.ejs`
```html
  <title>Show</title>
</head>
<body>
  <h1><%= campground.title %></h1>
  <h2><%= campground.location %></h2>
```

### Campground New & Create
- NEW FORM ROUTE
<hr>

- Route to Test - Make sure before `campgrounds/:id` route

```js
//NEW FORM
app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
})
```
- Simple form EJS
```html
  <form action="/campgrounds" methods="POST">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="campground[title]">
    </div>
    <div>
      <label for="location">Location</label>
      <input type="text" id="location" name="campground[location]">
    </div>
    <button>Add Campground</button>
  </form>
```
- CREATE/POST ROUTE
```js
//POST ROUTE
app.post('/campgrounds', async (req, res) => {
  res.send(req.body)
})
```
- NEED TO TELL EXPRESS TO PARSE THE REQ.BODY FOR US so we can see it on the browser after we submit the form to test the route
```js
//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
```
- NEW POST ROUTE
```js
//POST ROUTE
app.post('/campgrounds', async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`campgrounds/${campground._id}`);
})
```
### Campground Edit & Update
- FORM TO UPDATE --> GET ROUTE --> copy from show route:
```js
//UPDATE
app.get('/campgrounds/:id/edit', async(req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/edit', { campground });
})
```
- CREATE FORM --> populate data from id you are updating
```html
  <h1>Edit Campground</h1>
  <form action="/campgrounds" method="POST">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" name="campground[title]" value="<%= campground.title %>">
    </div> 
    <div>
      <label for="location">Location</label>
      <input type="text" id="location" name="campground[location]" value="<%= campground.location %>">
    </div>
    <button>Update Campground</button>
  </form>
```
- install `npm i method-override`
- require in `app.js` --> `const methodOverride = require('method-override');`
- add to `middleware` in `app.js` --> `app.use(methodOverride('_method'))`
- create PUT route to update and test 
```js
//PUT ROUTE TO UPDATE
app.put('/campgrounds/:id', async (req, res)=> {
  res.send("IT WORKED!!")
})
```
- update form to include PUT method
```html
  <h1>Edit Campground</h1>
  <form action="/campgrounds/<%= campground._id %>?_method=PUT" method="POST">
    <div>
```
- CODE IN PUT ROUTE TO UPDATE OBJECT
- SPREAD OPERATOR `{...req.body.campground}`
```js
//PUT ROUTE TO UPDATE
app.put('/campgrounds/:id', async (req, res)=> {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
  //HAD ISSUES WHEN IT WAS `campgrounds/${campground._id}`
  res.redirect(`${campground._id}`);
});
```
### Campground Delete
- Create DELETE ROUTE with `id` included
- Not going to do anything with the object being deleted for now -- later on this will change
```js
//DELETE ROUTE
app.delete('/campgrounds/:id', async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect('/campgrounds');
});
```
- ADD BUTTON to send DELETE REQUEST as a FORM
```html
  <p>
    <form action="/campgrounds/<%=campground._id%>?_method=DELETE" method="POST">
      <button>Delete</button>
    </form>
  </p>
```







