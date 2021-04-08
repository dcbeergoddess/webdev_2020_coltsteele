const express = require('express');
const app = express();
PORT = 3030;
const path = require('path');
//WILL MOVE LATER - MONGOOSE
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const AppError = require('./AppError')

//REQUIRE MODELS
const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand2', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
   })
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
///////////////////ARRAY CATEGORIES//////////////
//******************************************** */
const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];

//******************************************** */
///////////////////ROUTES////////////////////////
//******************************************** */
//DEFAULT TEST-HOME PAGE
app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE!!!');
});
//INDEX PAGE - GET ALL PRODUCTS - async (takes time)
app.get('/products', async (req, res) => {
  try {
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
  } catch(e) {
    next(e);
  }
});

// 1. SERVE UP FORM TO CREATE NEW PRODUCTS - not doing anything async
app.get('/products/new', (req, res) => {
  // throw new AppError('NOT ALLOWED', 401)
  res.render('products/new', { categories });
});
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
//UPDATE PRODUCT
app.get('/products/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product){
      throw new AppError('Product Not Found', 404)
    };
    res.render('products/edit', { product, categories });
  } catch(e) {
    next(e);
  }

});
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
//DELETE PRODUCT
app.delete('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
  } catch(e) {
    next(e);
  }
});

//******************************************** */
////////DEFAULT ERROR/PORT LISTENING/////////////
//******************************************** */
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong'} = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`);
});