# SECTION

## Crucial 

### * The Concept of Middleware is Express
### * Defining Custom Middleware

<br>

## Nice to Have

### * Morgan Logging Middleware

<br>

## Notes

<hr>

### Intro to Express Middleware
- Express middleware are functions that run during the request/response lifestyle
- REQUEST ---> MIDDLEWARE ---> RESPONSE 
- body parsing, etc
- Middleware are just functions that run in between the Request --> Response lifecycle
- Each middleware has access to the request and response objects
- Middleware can end the HTTP request by sending back a response with methods like `res.send()`
- OR middleware can be chained together, on after another by calling `next()`


### Using Morgan - Logger Middleware
* [MORGAN DOCS](https://github.com/expressjs/morgan)
- HTTP request logger middleware for node.js
1. `npm i morgan`
2. `const morgan = require('morgan');`
3. `morgan('tiny')`
* **app.use** --> FUNCTION WILL RESPOND ON EVERY REQUEST MADE --> way to run code on every request made
```js
app.use(() => {
  console.log("HEY!!!!!!!")
});
```
4. tell app to use morgan
```js
//MORGAN MIDDLEWARE
app.use(morgan('tiny'));
```
5. logs info in console about the request - helps debug issues when you are not getting the response you are looking for
```
Get /dogs 304 - - 2.342 ms
GET / 304 - - 0.249 ms
Get /asdfasdf 404 147 - 2.830 ms
```
6. Customize morgan --> Example --> For Development
* `app.use(morgan('dev'))` --> same info from 'tiny' displayed slightly different

### Defining Our Own Middleware
- [WRITING MIDDLEWARE DOCS](http://expressjs.com/en/guide/writing-middleware.html)
- Example 1 of Creating our own middleware
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res) => {
  res.send('HIJACKED BY MY APP.USE')
}); 
```
- OFTEN WE WILL WANT TO CALL NEXT MIDDLEWARE. `next` refers to the next middleware. DOCS EXAMPLE:
```js
app.get('/', function(req, res, next) {
  next();
})
```
- `res.send` stops the whole cycle so won't matter on first example above. `console.log` instead for now on every request that comes in
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  console.log('THIS IS MY FIRST MIDDLEWARE!!');
  next();
  console.log('THIS IS MY FIRST MIDDLEWARE!! - AFTER NEXT()'); //PRINTS OUT AFTER NEXT Middleware runs 
}); 
app.use((req, res, next) => {
  console.log('THIS IS MY SECOND MIDDLEWARE!!');
  next();
}); 
```
- can `return next();` to unsure no code runs after calling next and stop the function
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  console.log('THIS IS MY FIRST MIDDLEWARE!!');
  return next();
  console.log('THIS IS MY FIRST MIDDLEWARE!! - AFTER NEXT()'); //THIS CODE WILL NOT RUN NOW
}); 
app.use((req, res, next) => {
  console.log('THIS IS MY SECOND MIDDLEWARE!!');
  return next();
}); 
```
### More Middleware Practice 
- The Utility of Writing Middleware --> access information from the request and we can modify or add data to the request object object before any of our route handlers are executed (i.e. check to see if user is authenticated)
- Decorating or adding on to request object
- RECREATE MORGAN - GET INFO FROM REQUEST
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next();
})
```
- MAKE EVERYTHING A GET METHOD -- EXAMPLE
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  req.method = 'GET';
  console.log(req.method, req.path)
  next();
});
```
- Make every route have access to `requestTime = Date.now()`
```js
//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
```
- USE IN ROUTES
```js
//ROUTES
app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('WOOF! WOOF!');
})
```

### Setting up a 404 Route
- app.use w/ routes
```js
app.use('/dogs', (req, res, next) => {
  console.log("I LOVE DOGS!");
  next();
})
```
- place at end before listener - will match any request or verb that is not found
```js
app.use((req, res) => {
  res.status(404).send('NOT FOUND');
})
```
### Password Middleware Demo (NOT REAL AUTH)

### Protection Specific Routes
