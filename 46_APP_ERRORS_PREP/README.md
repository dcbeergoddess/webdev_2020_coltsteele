# Handling Errors in Express App

## Crucial 

### * Defining Custom Error Handlers
### * Handling Async Errors
### * Defining Custom Error Class

<br>

## Important 

### * Express' Built-In Handler
### * Working With Mongoose Errors

<br>

## Notes

<hr>

### Express' Built-In Error Handler
- [EXPRESS ERROR HANDLING DOCS](http://expressjs.com/en/guide/error-handling.html)
- REQUEST --> ERRORS --> RESPONSE
- Things will happen that break your code
- try to handle errors in a graceful way in express and have some control over what happens
- RIGHT NOW - default error handling - TEST IN POSTMAN 
```js
app.get('/error', (req, res) => {
  chicken.fly();
});
```
- POSTMAN TEST --> Get back HTML Response from Express:
![current errors](assets/express_error.png)
- Create Wallpaper to Hide and to handle user errors
- Throw your own errors:
```js
const verifyPassword = ((req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget'){
    next();
  }
  // res.send('Sorry you need a password')
  throw new Error('Password required!')
})
```
- Test in Postman:
![throw error](assets/throw_error.png)

### Defining Custom Error Handlers
- Writing Error handlers --> Express Docs
- Needs to have 4 arguments that will be passed into the error-handling middleware function `(err, req, res, next)`
- Put last in file after `app.use` or `app.get` before `app.listen`
```js
// ERROR HANDLING MIDDLEWARE FUNCTION
app.use((err, req, res, next) => {
  console.log('***************************')
  console.log('**********Error************')
  console.log('***************************')
})
```
- POSTMAN:
![PostMan Test of error](assets/middleware_error1.png)
- CONSOLE:
![Console Log of error](assets/middleware_error2.png)
<hr>

- ADD IN `res.status(500).send("message")`
```js
// ERROR HANDLING MIDDLEWARE FUNCTION
app.use((err, req, res, next) => {
  console.log('***************************')
  console.log('**********Error************')
  console.log('***************************')
  res.status(500).send("OH BOY, WE GOT AN ERROR!!!!")
})
```
- POSTMAN:
![PostMan Test of error](assets/middleware_error3.png)
<hr>

- Using `next()`
```js
// ERROR HANDLING MIDDLEWARE FUNCTION
app.use((err, req, res, next) => {
  console.log('***************************')
  console.log('**********Error************')
  console.log('***************************')
  console.log(err)
  next();
})
```
- POSTMAN:
![PostMan Test of error](assets/middleware_error4.png)
- CONSOLE:
![Console Log of error](assets/middleware_error5.png)
<hr>

- need to pass `err` into `next(err)` --> will call next error handling middleware vs next() --> calls non error middleware next
```js
// ERROR HANDLING MIDDLEWARE FUNCTION
app.use((err, req, res, next) => {
  console.log('***************************')
  console.log('**********Error************')
  console.log('***************************')
  console.log(err);
  next(err); //hit built in error failure
})
```
- POSTMAN:
![PostMan Test of error](assets/middleware_error6.png)
- CONSOLE:
![Console Log of error](assets/middleware_error7.png)

### Our Custom Error Class
- Express gives you a lot of control --> no one way to handle errors
- [MDN HTTP STATUS CODES](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 

### Handling Async Errors

### Defining An Async Utility

### Differentiating Mongoose Errors