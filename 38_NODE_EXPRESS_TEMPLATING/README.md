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


### Conditionals in EJS

### Loops in EJS

### A More Complex Subreddit Demo

### Serving Static Assets in Express

### Bootstrap + Express

### EJS & Partials
