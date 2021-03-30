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
#### [INDEX.JS TEMPLATE](02_templates_initial/index.js)

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
#### [TEMPLATE](03_templates_seed/product.js)
#### [TEMPLATE](03_templates_seed/index.js)
#### [TEMPLATE](03_templates_seed/seeds.js)

### Products Index

#### [TEMPLATE](04_templates_/index.js)

### Product Details

#### [TEMPLATE](05_templates_/index.js)

### Creating Products

#### [TEMPLATE](06_templates_/index.js)

### Updating Products

#### [TEMPLATE](07_templates_/index.js)

### Tangent On Category Selector

#### [TEMPLATE](08_templates_/index.js)

### Deleting Products

#### [TEMPLATE](09_templates_/index.js)

### BONUS: Filtering By Category

#### [TEMPLATE](10_templates_/index.js)