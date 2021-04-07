const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

//MORGAN MIDDLEWARE
app.use(morgan('dev'));

//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (req, res, next) => {
  console.log("I LOVE DOGS!");
  next();
});

const verifyPassword = ((req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget'){
    next();
  }
  throw new AppError('password required', 401);
  // res.send('Sorry you need a password')
  // res.status(401)
  // throw new Error('Password required!')
});

//ROUTES
app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send('HOME PAGE!');
});

app.get('/error', (req, res) => {
  chicken.fly();
});

app.get('/dogs', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send('WOOF! WOOF!');
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I do not have to talk to anyone')
});

app.get('/admin', (req, res) => {
  throw new AppError('You are not an Admin', 403)
});

app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

// ERROR HANDLING MIDDLEWARE FUNCTION
// app.use((err, req, res, next) => {
//   console.log('***************************')
//   console.log('**********Error************')
//   console.log('***************************')
//   console.log(err);
//   next(err);
// })

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong' } = err;
  res.status(status).send(message);
});

//LISTENER
app.listen(3030, () => {
  console.log('App is running on localhost:3030');
});