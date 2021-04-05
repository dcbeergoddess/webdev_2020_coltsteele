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
- 

### More Middleware Practice 

### Setting up a 404 Route

### Password Middleware Demo (NOT REAL AUTH)

### Protection Specific Routes
