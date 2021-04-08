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

```js
const verifyPassword = ((req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget'){
    next();
  }
  // res.send('Sorry you need a password')
  res.status(401)
  throw new Error('Password required!')
})
```
![STATUS CODE ERROR 401](assets/status_code1.png)

- Would have to write this a lot so instead throw some generic error 
- Instead: create new file `AppError.js`:
```js
class AppError extends Error {
  constructor(message, status){
    super();
    this.message = message;
    this.status = status;
  }
};

module.exports = AppError;
```
- require in `index.js`: `const AppError = require('./AppError');`:
```js
const verifyPassword = ((req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget'){
    next();
  }
  throw new AppError('password required', 401);
});
```
- ON LOCALHOST SAME RESPONSE:
![STATUS CODE ERROR 401](assets/status_code2.png)

- When an error is written, the following information is added to the response:
* The res.statusCode is set from `err.status` (or `err.statusCode`). If this value is outside the 4xx or 5xx range, it will be set to 500.
* The res.statusMessage is set according to the status code.
* The body will be the HTML of the status code message when in production environment, otherwise will be `err.stack` --> errors have their own stack
* Any headers specified in an `err.headers` object.
- DESTRUCTURE `{ status }` from error stack:
```js
app.use((err, req, res, next) => {
  const { status } = err;
  res.status(status).send('ERRORRRR!!!!')
});
```
- ON LOCALHOST:
![STATUS CODE ERROR 401](assets/status_code3.png)

- will not work on `/error` because has not status code, it's a reference (syntax) error:
![NO STATUS CODE ERROR](assets/status_code4.png)
- give deconstructed `{status}` a default value
```js
app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).send('ERRORRRR!!!!')
});
```
- ON LOCALHOST:
![STATUS CODE ERROR](assets/status_code5.png)

- Very Simple way to set up Error Class where we can specify a message in a status, throw that from anywhere in our application with different status, different messages, and then have a  single handler that will take them. 
- Also use default values if we don't provide them and then send that status code back with that message
```js
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong' } = err;
  res.status(status).send(message);
});
```
- ON LOCALHOST:
![STATUS CODE ERROR](assets/status_code6.png)
![STATUS CODE SECRET](assets/status_code7.png)

- `403 Forbidden`
- Make Fake admin route
```js
app.get('/admin', (req, res) => {
  throw new AppError('You are not an Admin', 403)
});
```
- ON LOCALHOST:
![STATUS CODE 403 ERROR](assets/status_code8.png)

- Can Respond with stack trace in development mode

### Handling Async Errors
- Mongoose Queries - And Async Functions
- Default Error
```js
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong'} = err;
  res.status(status).send(message);
});
```
- Test In Route
```js
app.get('/products/new', (req, res) => {
  throw new AppError('NOT ALLOWED', 401)
  res.render('products/new', { categories });
});
```
- IN LOCALHOST:
![ERROR HANDLING TEST](assets/async1.png)
<hr>

- TRY TO FIND PRODUCT WITH WRONG ID IN LOCAL HOST:
![ASYNC TEST](assets/async2.png)

- Eventually want to set up templates to handle errors instead of `product not found`. But for Now let's try this:
```js
// SINGLE PRODUCT PAGE
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if(!product){
    throw new AppError('Product Not Found', 404)
  }
  res.render('products/show', { product });
});
```
- CONSOLE:
![ERROR IN CONSOLE](assets/async3.png)
- ACTS DIFFERENT Inside async function
- For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the `next()` function, where Express will catch and process them
```js
app.get('/products/:id', async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if(!product){
    next(new AppError('Product Not Found', 404))
  };
  res.render('products/show', { product });
});
```
- LOCALHOST:
![ERROR IN LOCALHOST](assets/async4.png)
- CONSOLE:
![ERROR IN CONSOLE](assets/async5.png)
- ERROR coming from EJS in console. `return` next function so it does not look for next middleware and run rest of code in route, i.e `res.render`
```js
  if(!product){
    return next(new AppError('Product Not Found', 404))
  };
    res.render('products/show', { product });
```
- Another Example to Handle Async Code:
```js
app.get('/products/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if(!product){
    return next(new AppError('Product Not Found', 404))
  };
  res.render('products/edit', { product, categories });
});
```
- Express example - no need to return next in if, else statement
```js
app.get('/', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
});
```
### More Handling Async Errors
- errors coming from mongoose, or from messing up code, etc. where you are not calling `next()`
- There are validations on the Model
- make new product - with price of 2 but no name
- LOCALHOST:
![ERROR IN LOCALHOST](assets/async6.png)
- CONSOLE:
![ERROR IN CONSOLE](assets/async7.png)
- HANDLE MONGOOSE ERROR BY USING `try` and `catch` and passing `e` into `next()`:
```js
// 2. ROUTE TO POST FORM WHEN SUBMIT
app.post('/products', async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
  } catch(e){
    next(e);
  } 
});
```
- LOCALHOST:
![ERROR IN LOCALHOST](assets/async7.png)
- ANOTHER EXAMPLE IN UPDATE ROUTE:
```js
//PUT REQUEST TO REPLACE ENTIRE OBJECT WITH UPDATED INFO
app.put('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`); 
  } catch(e) {
    next(e);
  }
});
```
- IF ASYNC FUNCTION WRAP IN TRY AND CATCH!!!!
- PRODUCT DETAILS PAGE UPDATE-Whether it's an error mongoose throws, or I throw myself it will be caught:
```js
// SINGLE PRODUCT PAGE
app.get('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product){
      throw new AppError('Product Not Found', 404)
    };
    res.render('products/show', { product });
  } catch(e) {
    next(e);
  }
});
```
- Usually we will redirect to a template in our error handling
- just know you have to use this in any `async middleware` or any `async root handler`

### Defining An Async Utility

### Differentiating Mongoose Errors
- 