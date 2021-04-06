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
- make sticky-top, dark navbar - if toggle works js is connected correctly:
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
- mkdir `partials` in `views` for `navbar.ejs` --> include in `boilerplate.ejs`:
```html
</head>
<body>
  <%- include('../partials/navbar') %> 
  <main class="container mt-5">
    <%- body %> 
  </main>
```

## Footer Partial

## Adding Images

## Styling Campground Index

## Styling Edit Form

## Styling Show Page

