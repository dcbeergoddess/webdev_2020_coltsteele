# BASIC STYLES FOR YELP CAMP
- [YELP CAMP GITHUB CODE FOR THIS SECTION](https://github.com/Colt/YelpCamp/tree/509354878f5cbd0fc8325a2e0da347075c722740)
- [EJS-MATE PACKAGE](https://github.com/JacksonTian/ejs-mate)
- [BOOTSTRAP DOCS](https://getbootstrap.com/)

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
- new `index.ejs`
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
- 

## Navbar Partial

## Footer Partial

## Adding Images

## Styling Campground Index

## Styling Edit Form

## Styling Show Page

