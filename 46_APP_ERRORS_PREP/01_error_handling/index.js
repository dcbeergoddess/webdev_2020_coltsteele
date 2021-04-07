const express = require('express');
const app = express();
const morgan = require('morgan');

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
  // res.send('Sorry you need a password')
  throw new Error('Password required!')
})

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
})

app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

// ERROR HANDLING MIDDLEWARE FUNCTION
app.use((err, req, res, next) => {
  console.log('***************************')
  console.log('**********Error************')
  console.log('***************************')
  console.log(err);
  next(err);
})

//LISTENER
app.listen(3030, () => {
  console.log('App is running on localhost:3030');
});