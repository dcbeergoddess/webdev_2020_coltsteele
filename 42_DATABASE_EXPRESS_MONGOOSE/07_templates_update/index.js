const express = require('express');
const app = express();
PORT = 8080;
const path = require('path');
//WILL MOVE LATER - MONGOOSE
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//REQUIRE MODELS
const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!");
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARE 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//******************************************** */
///////////////////ROUTES////////////////////////
//******************************************** */
//DEFAULT TEST-HOME PAGE
app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE!!!');
});
//INDEX PAGE - GET ALL PRODUCTS - async (takes time)
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  // console.log(products);
  res.render('products/index', { products });
});
// 1. SERVE UP FORM TO CREATE NEW PRODUCTS - not doing anything async
app.get('/products/new', (req, res) => {
  res.render('products/new');
});
// 2. ROUTE TO POST FORM WHEN SUBMIT
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});
// SINGLE PRODUCT PAGE
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});
//UPDATE PRODUCT
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
});
//PUT REQUEST TO REPLACE ENTIRE OBJECT WITH UPDATED INFO
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidator: true, new: true});
  res.redirect(`/products/${product._id}`); 
});

//******************************************** */
////////DEFAULT ERROR/PORT LISTENING/////////////
//******************************************** */
app.get('*', (req, res) => {
  res.send('I DO NOT KNOW THAT PATH!!!!');
});

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`);
});
