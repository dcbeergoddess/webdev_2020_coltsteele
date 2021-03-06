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
  res.send('Sorry you need a password')
})
/*
app.use((req, res, next) => {
  console.log('THIS IS MY FIRST MIDDLEWARE!!');
  return next();
  console.log('THIS IS MY FIRST MIDDLEWARE!! - AFTER NEXT()'); //THIS CODE WILL RUN AFTER OTHER MIDDLEWARE UNLESS YOU RETURN NEXT() AND STOP THE FUNCTION
}); 
app.use((req, res, next) => {
  console.log('THIS IS MY SECOND MIDDLEWARE!!');
  return next();
}); 
*/
//ROUTES
app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send('HOME PAGE!');
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

//LISTENER
app.listen(3030, () => {
  console.log('App is running on localhost:3030');
});