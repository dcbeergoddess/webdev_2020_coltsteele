const express = require('express');
const app = express();
PORT = 8080
const path = require('path')
//WILL MOVE LATER - MONGOOSE
const mongoose = require('mongoose');

//REQUIRE MODELS
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("MONGO CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO MONGO CONNECTION ERROR!")
  console.log(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE!!!')
});

app.get('*', (req, res) => {
  res.send(`I DO NOT KNOW THAT PATH!!!!`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}` )
}); 