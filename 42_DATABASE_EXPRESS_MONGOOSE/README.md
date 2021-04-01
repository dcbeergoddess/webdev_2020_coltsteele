# Putting It All Together: Mongoose With Express

## Crucial 

### * Integrating Mongoose w/ Express
### * Defining Our Model
### * Products Index
### * Product Details
### * Creating Products
### * Updating Products
### * Deleting Products

<br>

## Nice to Have
### * Filtering By Category

<br>

## Notes
- Creating Full `CRUD` App with a `DATABASE`
<hr>

### Express + Mongoose Basic Setup
* [PROJECT FOLDER: PRODUCT APP](01_mongoose_express)
1. `npm init -y`
2. `npm i express ejs mongoose`
3. `touch index.js`
4. `mkdir views`
5. Code for [index.js](01_mongoose_express/index.js):
<hr>

```js
const express = require('express');
const app = express();
PORT = 8080
const path = require('path')

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
```
<hr>

6. `nodemon index.js` : TEST CONNECTION
7. START WITH THIS CODE IN index.js - will move to new file | make sure Mongo is running in background:
<hr>

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbName', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("MONGO CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO MONGO CONNECTION ERROR!")
  console.log(err)
});
```
<hr>

8. POSSIBLE  CONNECTION ERROR - OPEN BACK UP WITH THIS CODE in TERMINAL
* 1.  `mongod --config /usr/local/etc/mongod.conf --fork`
* 2. `mongo`
#### [TEMPLATE: index.js](02_templates_initial/index.js)

### Creating our Model
- making app to manage inventory at a farm stand
- MAKE NEW DIRECTORY for MODELS
9. `mkdir models` --> `touch models/product.js`
10. CODE FOR `PRODUCT.JS` in MODELS - Require Mongoose
11. CREATE `SCHEMA` in `product.js`
<hr>

```js
//REQUIRE MONGOOSE
const mongoose = require('mongoose');

//CREATE SCHEMA
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true,
    min: [0, 'NO NEGATIVE PRICES!!!']
  },
    type: String,
    lowercase: true,
    enum: ['fruit', 'vegetable', 'dairy']
});
```
<hr>

12. COMPILE OUR MODEL in `products.js`
13. EXPORT MODEL in `products.js`
<hr>

```js
//COMPILE OUR MODEL
const Product = mongoose.model('Product', productSchema)

//EXPORT OUR MODEL
module.exports = Product;
```
<hr>

14. REQUIRE `model` in `index.js`
<hr>

```js
//REQUIRE MODELS
const Product = require('./models/product');
```
<hr>

15. CREATE SEED DATA in new file `touch seeds.js` in root directory - file to run on it own when you want to get some data in your database for development purposes
16. CODE SEED ONE PRODUCT: 
<hr>

```js
// CODE IN seeds.js - connect to mongo - require Product Model
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("MONGO CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO MONGO CONNECTION ERROR!")
  console.log(err)
});

const p = new Product({
  name: "Ruby Grapefruit",
  price: 1.99,
  category: "fruit",
});
p.save()
  .then(p => {
    console.log(p);
  })
  .catch(e => {
    console.log(e);
  });
```
<hr>

16. run `node seeds.js` in terminal in root directory
17. in mongo shell
* 1. `show dbs`
* 2. `use farmStand`
* 3. `show collections`
* 4. `db.products.find()`

18. `.insertMany()`--> SEED MORE THAN ONE PRODUCT:
<hr>

```js
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

//InsertMany - will fail if validation does not pass on one 
Product.insertMany(seedProducts)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  });
```
<hr>

19. run file again in terminal --> `node seeds.js`
18. mongo shell to check --> `db.products.find()`
#### [TEMPLATE: product.js](03_templates_seed/product.js)
#### [TEMPLATE: index.js](03_templates_seed/index.js)
#### [TEMPLATE: seeds.js](03_templates_seed/seeds.js)

### Products Index
17. Route to Index Page (in index.js) - List of All Products - Make sure it's working first and await the response properly:
<hr>

```js
//INDEX PAGE - GET ALL PRODUCTS - async (takes time)
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  console.log(products)
  res.send('PRODUCTS WILL BE HERE');
});
```
<hr>

18. `mkdir views/products`
19. `touch views/products/index.ejs`
20. [index.ejs CODE](01_mongoose_express/views/products/index.ejs)
21. route products to index.ejs and pass through all products we found to res.render:
<hr>

```js
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index.ejs', { products });
});
```
<hr>

22. MAKE UL - LOOP in `products/index.ejs` - Will give you template if you type `<%` in VS CODE for easier time formatting loop to start
<hr>

```html
  <h1>All Products!</h1>

  <ul>
    <% for( let product of products ) { %>
      <li><%= product.name %> </li>
    <% } %>
  </ul>
```
<hr>

#### [TEMPLATE: index.ejs](04_templates_productIndex/index.ejs)
#### [TEMPLATE: index.js](04_templates_productIndex/index.js)

### Product Details
- Set Up Details Page for a Single Product (can make `slug` for user error to pass in name, etc to web address --> we'll use mongo id)
23. SET UP ROUTE in `index.js` TO FIND BY MONGO ID:
<hr>

```js
// SINGLE PRODUCT PAGE
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.send('details page!'); //TEST ROUTE
}); 
```
<hr>

24. Grab ID from mongo product and test route --> `http://localhost:8080/products/606377391810e721abde9f56` --> check console to see if correct product printed out from `console.log(product)` written into GET Route for Single Product

25. Create and Render Template --> `touch views/products/show.ejs` --> to Display Single Product:
<hr>

```js
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
}); 
```
- EJS CODE
```html
  <title><%= product.name %></title>
</head>
<body>
  <h1><%= product.name %></h1>
  <ul>
    <li>Price: $<%= product.price %></li>
    <li>Category: <%= product.category %></li>
  </ul>
  <a href="/products">All Products</a>

</body>
```
<hr>

26. Test again with manual insertion of mongo id in address bar: `http://localhost:8080/products/606377391810e721abde9f56`

27. Create Link to Product using `product._id` in `product/index.ejs` to take you to a `show.ejs` page: 
<hr>

```html
  <title>All Products</title>
</head>
<body>
  <h1>All Products!</h1>

  <ul>
    <% for( let product of products ) { %>
      <li><a href="/products/<%=product._id%>"><%= product.name %></a></li>
    <% } %>
  </ul>
```
<hr>

- FOR NOW WE ARE IGNORING ERROR HANDLING

#### [TEMPLATE: products/index.ejs](05_templates_productDetails/index.ejs)
#### [TEMPLATE: products/show.ejs](05_templates_productDetails/show.ejs)
#### [TEMPLATE: index.js](05_templates_productDetails/index.js)

### Creating Products
- NEED TWO ROUTES --> need a form --> need route to submit form
28. ROUTE TO SERVE UP `FORM` in `index.js`:
<hr> 

```js
// MAKE SURE TO PUT THIS BEFORE 'products/:id' route
app.get('/products/new', (req, res) => {
  res.render('products/new')
})
```
29. Create Template for form --> [products/new.ejs](01_mongoose_express/views/products/new.ejs): 
<hr>

```html
  <h1>Add a Product</h1>
  <form action="/products" method="POST">
    <label for="name">Product Name</label>
    <input type="text" name="name" id="name" placeholder="product name">
    <label for="price">Price (Unit)</label>
    <input type="number" name="price" id="price" placeholder=0>
    <label for="category">Select Category</label>
    <select name="category" id="category">
      <option value="fruit">fruit</option>
      <option value="vegetable">vegetable</option>
      <option value="dairy">dairy</option>
    </select>
    <button>Submit</button>
  </form>
```
<hr>

30. CREATE ROUTE TO SUBMIT FORM:
<hr>

* 1. CREATE MIDDLEWARE:
```js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//ADD FOLLOWING TO MIDDLEWARE TO PARSE INFO
app.use(express.urlencoded({extended: true}));
```
2. CREATE POST ROUTE - TEST FIRST by printing out req.body and calling `res.send`:
```js
//REMEMBER WE DON'T HAVE ACCESS OR DEFINED REQ.BODY YET
// 2. ROUTE TO POST FORM WHEN SUBMIT
app.post('/products', (req, res) => {
  console.log(req.body)
  res.send("MAKING YOUR PRODUCT!!!")
})
```
<hr>

31. NOT GOING TO BE ERROR HANDLING or PRODUCT VALIDATION for info being posted and TEST AGAIN w/ `res.send()` and print `newProduct` to console | NOT a guarantee it was saved since it creates id before it is inserted | Not validation in place right now: 
<hr>

```js
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.send("MAKING YOUR PRODUCT!!!");
});
```
<hr>

32. ADD REDIRECT - Prevents resubmission
<hr>

```js
// 2. ROUTE TO POST FORM WHEN SUBMIT
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});
```
<hr>

#### [TEMPLATE: index.js](06_templates_create_new/index.js)
#### [TEMPLATE: new.ejs](06_templates_create_new/new.ejs)

### Updating Products
33. CREATE ROUTE FOR UPDATING PRODUCTS AFTER FIND ONE ROUTE:
<hr>

* 1. FIRST FIND PRODUCT:
```js
//UPDATE PRODUCT
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
});
```
* 2. CREATE FORM TO EDIT PROJECT --> [products/edit.ejs](01_mongoose_express/views/products/edit.ejs): 
```html
  <h1>Edit Product</h1>
  <form action="/products/<%=product._id%>" method="#">
    <label for="name">Product Name</label>
    <input type="text" name="name" id="name" placeholder="product name" value="<%= product.name %>">
    <label for="price">Price (Unit)</label>
    <input type="number" name="price" id="price" placeholder="price" value="<%= product.price %>">
    <!-- worry about category later.... -->
    <label for="category">Select Category</label>
    <select name="category" id="category">
      <option value="fruit">fruit</option>
      <option value="vegetable">vegetable</option>
      <option value="dairy">dairy</option>
    </select>
    <button>Submit</button>
  </form>
```
<hr>

34. CREATE PUT OR PATCH REQUEST (put = replace entire object vs patch = changing portion of object) | WILL USE PUT HERE | NEED `method-override`
<hr>

* 1. `npm i method-override`
* 2. import/require to `index.js` in top of file:
```js
const methodOverride = require('method-override');
```
* 3. add code for method-override middleware
```js
//MIDDLEWARE 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method')); //<--NEW ONE
```
* 4. ADD QUERY STRING TO EDIT FORM:
```html
<form action="/products/<%=product._id%>?_method=PUT" method="POST">
```
* 5. VERIFY PUT REQUEST:
```js
app.put('/products/:id', async (req, res) => {
  console.log(req.body); //--> make sure req is coming from form
  res.send('PUT!!!!') //--> Confirm with message
});
```
* 6. MOMENT OF TRUTH: check by adding `/edit` to end of product with id: --> `http://localhost:8080/products/60637c0a75fce02275999039/edit` --> update some info on `product` and `submit` --> should get `PUT!!!` back with new object info printing out in console. 
<hr>

35. WRITE LOGIC TO UPDATE A PRODUCT USING MONGOOSE:
- MULTIPLE WAYS TO DO THIS: CAN USE `findById` and pass in id and update where we pass in the ID and then we pass in our data | this is the lazy way with no validation but you get the point
- REMEMBER: [findByIdAndUpdate Docs](https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate) | need to specify `runValidators: true` | don't want old info so `new: true` (also this all depends on what you are looking to do) --> then redirect to page with new info so you are not allowed to send post request again
<hr>

```js
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidator: true, new: true});
  res.redirect(`/products/${product._id}`); //Still NOT GOOD BECAUSE you don't have access to product._id if you do not await it, not resolved value, not product info you want
});
```
<hr>

36. TEST EDIT in address bar `http://localhost:8080/products/6063b5804e05752e95ba3087/edit` 
```
(node:1254) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify
```
- ABOVE WARNING DID APPEAR WHEN TESTING EDIT BY MANUALly CHECKING ON LOCAL HOST PORT
37. ADD LINK IN ON `show.ejs` PAGE TO EDIT:
```html
  <a href="/products">All Products</a>
  <a href="/products/<%=product._id%>/edit">Edit Product</a>
```
38. TEST EDITING AGAIN VIA NEW LINK!!!
39. MAKE LINK on `edit.ejs`
<hr>

```html
     </select>
    <button>Submit</button>
  </form>
  <!-- LINK TO GO BACK/CANCEL EDIT ==> take back to show page -->
  <a href="/products/<%=product._id%> ">Cancel</a>
```
#### [TEMPLATE: index.js](07_templates_update/index.js)
#### [TEMPLATE: edit.ejs](07_templates_update/edit.ejs)
#### [TEMPLATE: show.ejs](07_templates_update/show.ejs)

### Tangent On Category Selector
49. dynamically turn on `selected` for each products category in the edit form
1. FIRST VERSION: EJS in `products/edit.ejs` FORM - If category is selected add selected otherwise nothing | **TERNARY OPERATOR** first value is what happens if the condition is true, the second value is for the false --- THIS IS THE CLUNKY VERSION!!! - what if you add more categories
<hr>

```js
    <label for="category">Select Category</label>
    <select name="category" id="category">
      <option value="fruit" <%=product.category === 'fruit' ? 'selected' : ''%>>fruit</option>
      <option value="vegetable" <%=product.category === 'vegetable' ? 'selected' : ''%>>vegetable</option>
      <option value="dairy" <%=product.category === 'dairy' ? 'selected' : ''%>>dairy</option>
    </select>
```
<hr>

2. SECOND VERSION: CREATE A LOOP -- CREATE AN ARRAY of CATEGORIES in `index.js` before the routes and pass that through to the `new route`, iterate over categories when you create a new product
<hr>

a. CREATE ARRAY
```js
//******************************************** */
///////////////////ARRAY CATEGORIES//////////////
//******************************************** */
const categories = ['fruit', 'vegetable', 'dairy'];
```
b. PASS THROUGH TO NEW ROUTE
```js
// 1. SERVE UP FORM TO CREATE NEW PRODUCTS - not doing anything async
app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
});
```
c. CREATE EJS LOOP IN `products/new.ejs`
```html
    <label for="category">Select Category</label>
    <select name="category" id="category">
      <% for( let category of categories ) { %>
          <option value="<%=category%>"><%=category%></option>
      <% } %>
    </select>
```
- NOW WHEN YOU ADD NEW CATEGORIES TO ARRAY THEY WILL POPULATE IN THE NEW FORM
d. `index.js` in the EDIT ROUTE
```js
//UPDATE PRODUCT
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product, category });
});
```
e. `products/edit.ejs` FORM | TERNARY OPERATOR --> dynamic --> if product.category is the same as category in our loop then add selected otherwise add nothing:
```html
    <label for="category">Select Category</label>
    <select name="category" id="category">
      <% for( let category of categories ) { %>
        <option value="<%=category%>" <%= product.category === category ? 'selected' : ''  %> ><%=category%></option>
      <% } %>
    </select>
```
<hr>

- CODE IS CLEANED UP AND CAN ADD NEW OPTIONS MANUALLY TO ARRAY
50. ADD LINK TO CREATE NEW PRODUCT - `index.ejs`:
<hr>

```html
<body>
  <h1>All Products!</h1>

  <ul>
    <% for( let product of products ) { %>
      <li><a href="/products/<%=product._id%>"><%= product.name %></a></li>
    <% } %>
  </ul>
  <a href="/products/new">New Product</a>

</body>
```
<hr>

#### [TEMPLATE: index.js](08_templates_EJSloop/index.js)
#### [TEMPLATE: index.ejs](08_templates_EJSloop/index.ejs)
#### [TEMPLATE: edit.ejs](08_templates_EJSloop/edit.ejs)

### Deleting Products
51. SET UP DELETE ROUTE --> FOR DELETE BUTTON --> method.override to fake a POST --> from lectures on method override
<hr>

a. CREATE FORM IN `products/show.ejs` w/ `button` to submit the form:
```html
  <form action="/products/<%=product._id%>?_method=DELETE" method="POST">
    <button>Delete</button>
  </form>
```
b. CREATE THE ROUTE IN `index.js` - async - test with `res.send`:
```js
//DELETE PRODUCT
app.delete('products/:id', async (req, res) => {
  res.send("YOU MADE IT!!!") 
})
```
c. TAKE ID - EXTRACT FROM `req.params` --> AND REMOVE PRODUCT FROM THE DATABASE USING THAT `_id` --> redirect to homepage --> no error handling right now:
```js
//DELETE PRODUCT
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
})
```

#### [TEMPLATE: index.js](09_templates_delete/index.js)
#### [TEMPLATE: show.ejs](09_templates_delete/show.ejs)

### BONUS: Filtering By Category


#### [TEMPLATE](10_templates_/index.js)