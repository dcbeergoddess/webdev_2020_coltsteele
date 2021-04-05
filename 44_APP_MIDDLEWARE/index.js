const express = require('express');
const app = express();
const morgan = require('morgan');

//MORGAN MIDDLEWARE
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('HOME PAGE!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF! WOOF!')
})

app.listen(3030, () => {
  console.log('App is running on localhost:3030');
});