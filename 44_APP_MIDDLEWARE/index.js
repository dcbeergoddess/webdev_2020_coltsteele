const express = require('express');
const app = express();
const morgan = require('morgan');

//MORGAN MIDDLEWARE
app.use(morgan('dev'));

//MAKING OUR OWN MIDDLEWARE
app.use((req, res, next) => {
  console.log('THIS IS MY FIRST MIDDLEWARE!!');
  return next();
  console.log('THIS IS MY FIRST MIDDLEWARE!! - AFTER NEXT()'); //THIS CODE WILL RUN AFTER OTHER MIDDLEWARE UNLESS YOU RETURN NEXT() AND STOP THE FUNCTION
}); 
app.use((req, res, next) => {
  console.log('THIS IS MY SECOND MIDDLEWARE!!');
  return next();
}); 

//ROUTES
app.get('/', (req, res) => {
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF! WOOF!');
})

//LISTENER
app.listen(3030, () => {
  console.log('App is running on localhost:3030');
});