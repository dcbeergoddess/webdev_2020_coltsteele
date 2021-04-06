# BASIC STYLES FOR YELP CAMP
- [YELP CAMP GITHUB CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/509354878f5cbd0fc8325a2e0da347075c722740)
- [EJS-MATE PACKAGE](https://github.com/JacksonTian/ejs-mate)
- [BOOTSTRAP5! DOCS](https://v5.getbootstrap.com/docs/5.0)

## A New EJS Too For Layouts
- Reusable piece of code
- EJS-Mate - Add in fun, useful functionality to EJS `layout`
- `npm i ejs-mate`
- `const engine = require('ejs-mate')`
- `app.engine('ejs', engine);`
- DEFINE LAYOUT FILE: `mkdir layouts` --> `boilerplate.ejs`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BOILERPLATE!!!!</title>
</head>
<body>
  <h1>BEFORE</h1>
  <%- body %> 
  <h1>AFTER</h1>

</body>
</html>
```
- new `index.ejs`--> `<% layout('../layouts/boilerplate') %> `
```html
  <% layout('../layouts/boilerplate') %> 
  <h1>All Campgrounds</h1>
  <div>
    <a href="/campgrounds/new">Add Campground</a>
  </div>
  <ul>
    <% for( let campground of campgrounds ) { %>
    <li><a href="/campgrounds/<%=campground._id%>"><%= campground.title %></a></li>
    <% } %>
  </ul>
```
## Bootstrap5! Boilerplate
- No more dependency on jQuery
- colors, shades, etc different
- grid, default styles, how forms behave
- Copy CSS link into `boilerplate.ejs`: After `<title>`
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
```
- COPY JS BUNDLE link into `boilerplate.ejs`: Before end of `<body>`
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
```
- threw body into container
```html
<body>
  <main class="container">
    <%- body %> 
  </main>
```
## Navbar Partial
- [Bootstrap5! Navbar Docs](https://getbootstrap.com/docs/5.0/components/navbar/)- [Bootstrap5! Navbar Docs](https://getbootstrap.com/docs/5.0/components/navbar/)
- - mkdir `partials` in `views` for `navbar.ejs`
- make `sticky-top`, dark navbar - if toggle works js is connected correctly:
<hr>

```html
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">YelpCamp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/">Home</a>
        <a class="nav-link" href="/campgrounds">Campgrounds</a>
        <a class="nav-link" href="/campgrounds/new">New Campgrounds</a>
      </div>
    </div>
  </div>
</nav>
```
- include in `boilerplate.ejs`:
```html
</head>
<body>
  <%- include('../partials/navbar') %> 
  <main class="container mt-5">
    <%- body %> 
  </main>
```

## Footer Partial
- [Footer DOCS]
- make `footer.ejs` in `partials` directory
- include in `boilerplate.ejs`
- make footer `bg-dark`
- give it padding on top and bottom: `py-3`
- make text in span muted `class="container"`
- add copyright symbol `&copy;`
<hr>

```html
<footer class="footer bg-dark py-3">
  <div class="container">
    <span class="text-muted">&copy; YelpCamp 2020</span>
  </div>
</footer>
```
<hr>

- make it stay at bottom
- give `body` min height and force it to go down in `boilerplate.ejs`
- flexbox utilities in bootstrap --> `class="d-flex flex-column"`
- make view height it be at least 100 --> `class="d-flex flex-column vh-100"`
- ADD TO FOOTER - Make margin top auto --> `<footer class="footer bg-dark py-3 mt-auto">`
- when you want to move one thing on the page use margin to move it, there is no justify self and other flexbox properties/classes in bootstrap5 would effect all elements if you try to use them 
- FINAL PRODUCT:
```html
<!-- FOOTER.EJS -->
<footer class="footer bg-dark py-3 mt-auto">
  <div class="container">
    <span class="text-muted">&copy; YelpCamp 2020</span>
  </div>
</footer>

<!-- BOILERPLATE BODY -->
<body class="d-flex flex-column vh-100">
  <%- include('../partials/navbar') %> 
  <main class="container mt-5">
    <%- body %> 
  </main>
  <%- include('../partials/footer') %> 
```

## Adding Images
- using URLS - Unsplash API
- [Unsplash: In the Woods Collection](https://unsplash.com/collections/483251/in-the-woods)
- seed images --> copy collection `id` = `483251` --> `https://unsplash.com/collections/483251/in-the-woods`
- [Source Unsplash](https://source.unsplash.com/)
- `https://source.unsplash.com/collection/{COLLECTION ID}` --> `https://source.unsplash.com/collection/483251`
- update `MODEL` - `campground.js` to include images
<hr>

```js
const CampgroundSchema = new Schema ({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
});
```
<hr>

- update `SEEDS` - `index.js`
<hr>

```js
const seedDB = async () => {
    await Campground.deleteMany({});
    //CREATE LOOP FOR DATA - 50 times - 50 cities
    for(let i = 0; i < 50; i++){
        //random number to pick city[from 1000 city array]
        const random1000 = Math.floor(Math.random() * 1000);
        //random number for price
        const price = Math.floor(Math.random() * 20) + 10
        //make new Campground - location: city, state
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`, 
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt maiores consectetur asperiores iure obcaecati quia voluptatum ipsa error, optio illo molestiae enim voluptatem itaque suscipit? Culpa excepturi libero deleniti.',
            price //shorthand do not need price: price 
        });
        await camp.save()
    }
};
```
<hr>

- run `node seeds/index.js`
- look in mongo `db.campgrounds.find()` to check
- update `projects/show.ejs` to display image and other seeded data
```html
  <h1><%= campground.title %></h1>
  <h2><%= campground.location %></h2>
  <img src="<%= campground.image %>" alt="campground image">
  <p><%= campground.description %> </p>
  <p>
    <a href="/campgrounds/<%= campground._id %>/edit ">Edit Campground</a>
  </p>
  <p>
    <form action="/campgrounds/<%=campground._id%>?_method=DELETE" method="POST">
      <button>Delete</button>
    </form>
  </p>
```
<hr>

## Styling Campground Index
- Update Index.ejs --> Using Bootstrap5! Card
- [BOOTSTRAP5! CARD DOCS](https://getbootstrap.com/docs/5.0/components/card/)
<hr>

```html
    <% for( let campground of campgrounds ) { %>
      <div class="card mb-3">
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid" src="<%=campground.image%>/400x400" alt="campground image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><%= campground.title %></h5>
              <p class="card-text"><%= campground.description %></p>
              <p class="card-text">
                <small class="text-muted"><%= campground.location %></small>
              </p>
              <a class="btn btn-primary" href="/campgrounds/<%=campground._id%>">View <%= campground.title %></a>
            </div>
          </div>
        </div>
      </div>
    <% } %>
```
## Styling New Form
- 

## Styling Edit Form

## Styling Show Page

