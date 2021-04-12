const express = require('express');
const app = express();
PORT = 8080;
const path = require('path');
//WILL MOVE LATER - MONGOOSE
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//REQUIRE MODELS
const Product = require('./models/product');
const Farm = require('./models/farm')

mongoose
  .connect('mongodb://localhost:27017/demoApp', { useNewUrlParser: true, useUnifiedTopology: true })
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

const categories = ['fruit', 'vegetable', 'dairy'];

//HOME PAGE
app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE!!!');
});

//********************************************************* */
///////////////////FARM ROUTES////////////////////////////
//******************************************************** */
//Index Page for Farms
app.get('/farms', async (req, res) => {
  const farms = await Farm.find({});
  res.render('farms/index', { farms });
});
//Render Add Farm Form
app.get('/farms/new', (req, res) => {
  res.render('farms/new');
});
//Post Data from Add Farm Form
app.post('/farms', async (req, res) => {
  const farm = new Farm(req.body) //NO VALIDATION FOR NOW
  await farm.save(); //Typically have form of error handler
  res.redirect('/farms');
});
//SHOW ROUTE
app.get('/farms/:id', async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate(`products`);
  res.render('farms/show', { farm });
});

//DELETE FARM AND PRODUCTS ASSOCIATED
app.delete('/farms/:id', async (req, res) => {
  console.log("Deleting!!!");
  // const farm = await Farm.findByIdAndDelete(req.params.id);
  res.redirect('/farms');
});

//NEW ROUTE TO RENDER PRODUCT FORM
app.get('/farms/:id/products/new', async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render('products/new', { categories, farm });
});
//NEW POST ROUTE TO SUBMIT NEW PRODUCT FORM
app.post('/farms/:id/products', async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category} );
  farm.products.push(product)
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${farm._id}`); //could use just {id} here
});


//********************************************************* */
///////////////////PRODUCT ROUTES////////////////////////////
//******************************************************** */
//INDEX PAGE - GET ALL PRODUCTS - async (takes time)
app.get('/products', async (req, res) => {
  const { category } = req.query;
  if(category){
    // const products = await Product.find({category: category})
    const products = await Product.find({ category })//Shorten to this
    res.render('products/index', { products, category })
  } else {
    const products = await Product.find({});
      // console.log(products);
    res.render('products/index', { products, category: 'All' });
  }
});
// 1. SERVE UP FORM TO CREATE NEW PRODUCTS - not doing anything async
app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
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
  const product = await Product.findById(id).populate('farm', 'name');
  console.log(product);
  res.render('products/show', { product });
});
//UPDATE PRODUCT
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product, categories });
});
//PUT REQUEST TO REPLACE ENTIRE OBJECT WITH UPDATED INFO
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidator: true, new: true});
  res.redirect(`/products/${product._id}`); 
});
//DELETE PRODUCT
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
})

//******************************************** */
////////DEFAULT ERROR/PORT LISTENING/////////////
//******************************************** */
// app.get('*', (req, res) => {
//   res.send('I DO NOT KNOW THAT PATH!!!!');
// });

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`);
});
