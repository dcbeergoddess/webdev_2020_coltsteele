# SECTION

## Crucial 

### * What is Templating?
### * Configuring Express for EJS
### * Passing Data to Templates
### * Serving Static Assets
### * Creating Partials
### * EJS Loops & Conditionals 

<br>

## Notes

<hr>

### What is Templating?
- INSTEAD OF WRITING STATIC CODE
- DYNAMIC/CONDITIONALS/LOGIC
- allows us to define a preset "pattern" for a webpage, that we can dynamically modify 
- FOR EXAMPLE: we could define a "Search" template that displays all the results for a given search term. We don't know what the term is or how many results there are ahead of time. The webpage is created on the fly.
- MAD LIBS
- MANY OPTIONS for JS (i.e `handlbars`, `EJS`, `JADE`, `PUG`, `NUNJUCKS`)
- Additional Syntax: HTML | DYNAMIC CONTENT

### Configuring Express for EJS
- **Embedded JavaScript**
- [EJS DOCS](https://ejs.co/)
- POPULAR
- USES JS Syntax 
```js
  //TELL EXPRESS TO USE EJS
  app.set('view engine', 'ejs');
```
- `npm i ejs`
- express requires package behind the scenes
- by default, new express app and view engine they expect a folder called `views`
```js
  //render pages in views
  app.get('/', (req, res) => {
    res.render('home')
  })

```

### Setting The Views Directory
- `process.cwd()`
- EXPRESS - PATH - REQUIRE
```js
  const path = require('path'); //has built in `join` method

  app.set(`views`, path.join(__dirname, '/views')); 
  //taking current directory name and join that path with /views
  //DO ONE TIME PER APP
```
- [PATH DOCS](https://nodejs.org/api/path.html)

### EJS Interpolation Syntax
**TAGS**
- INDICATES THAT WHAT YOU ARE ABOUT TO SEE IS NOT HTML
* `<%` 'Scriptlet' tag, for control-flow, no output
* `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
* `<%=` Outputs the value into the template (HTML escaped)
* `<%-` Outputs the unescaped value into the template
* `<%#` Comment tag, no execution, no output
* `<%%` Outputs a literal `'<%'`
* `%>` Plain ending tag
* `-%>` Trim-mode ('newline slurp') tag, trims following newline
* `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it

```html
  <h1>HOME PAGE <%=WHATEVER I PUT IN HERE GETS TREATED AS JS%></h1>
```
- USUALLY to DEAL WITH DATA COMING FROM THE DATABASE

### Passing Data To Templates
```html
  <!-- ESJ = JS in TEMPLATE -->
  <body>
    <h1>Your random number is: <%= Math.floor(Math.random() * 10) + 1 %></h1>
  </body>
```
- YOU WANT TO REMOVE AS MUCH LOGIC AS YOU CAN IN YOUR TEMPLATES
- JUST DISPLAY THINGS
- Generate Number first and then pass to template
```js
  //GENERATE RANDOM NUMBER
app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  //PASS IN SECOND ARGUEMENT OF KEY VALUE PAIRS
  res.render('random', { rand: num });
  //WHATEVER NUM IS WILL BE AVAILABLE IN TEMPLATE UNDER RAND
})
```
```html
    <!-- pass in value from route -->
  <body>
    <h1>Your random number is: <%= rand %></h1>
  </body>
```

### Subreddit Template Demo
```js
  app.get('/r/:subreddit', (req, res) => {
    const { subredditt } = req.params;
    res.render('subreddit', { subreddit })
  })
```
- THIS IS VERY COMMON | USUALLY taking parameter and looking up information in a database, passing data that we found to render

### Conditionals in EJS
- MORE EJS SYNTAX
- ADD JS Logic without anything being rendered `<%`
```html
  <% if (num % 2 === 0) { %>
      <h2>That is an Even Number</h2>
      <p>MIGHT HAVE MORE TO RENDER IN THIS INSTANCE</p>
  <% } else { %>
      <h2>That is an Odd Number</h2>
  <% } %>
  <!-- ANOTHER WAY TO WRITE ABOVE CODE -->
  <!-- Ternary operator -->
  <h3>That number is <%= num%2===0 ? 'EVEN' : 'ODD' %> </h3>
```

### Loops in EJS
- Creation of very similar content
- subreddit has 1,000s of post and each has the same formula
- json file behind the scene with data
- render template over and over
```js
//CREATING QUICK DATABASE WITH ARRAY//
app.get('/cats', (req, res) => {
  const cats = [
    'Jade', 'Samson', 'Philip', 'Freya', 'Ninja'
  ];
  res.render('cats', { cats });
})
```
```html
<body>
  <h1>All Cats!</h1>
  <!-- Create Markup to Render All Cats -->
  <!-- MAKE EACH CAT NAME A LI -->
  <ul>
    <% for( let cat of cats ) { %>
      <li> <%= cat %>  </li>
    <% } %>
  </ul>
</body>
```

### A More Complex Subreddit Demo
- using `data.json` file

```js
//REQUIRE AT TOP
const redditData = require('./data.json');

//SAMPLE ROUTE 
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data) //should get print out of data
  res.render('subreddit', { ...data }) //spread data and access individual properties
})
```
```html
<!-- EJS SYNTAX -->
<body>
  <h1>Browsing the <%= name %> subreddit </h1> 
  <h2> <%= description %> </h2>
  <p><%= subscribers %>: Total Subscribers </p>
  <hr>
  <!-- render all posts using loop -->
  <% for( let post of posts ) { %>
    <article>
      <h3><%= post.title %> - <b><%= post.author %></b></h3>
      <% if (post.img) { %>
          <img src="<%= post.img %>" alt="">
      <% } %>
    </article>
  <% } %>

</body>
```
**ERROR HANDLING**
```js

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if(data) {
    res.render('subreddit', { ...data })
  } else {
    res.render('notfound', { subreddit })
  }
})
```

### Serving Static Assets in Express

### Bootstrap + Express

### EJS & Partials
