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
5. Code for [index.js](01_mongoose_express/index.js)
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
6. `nodemon index.js` : TEST CONNECTION
7. START WITH THIS CODE IN index.js - will move to new file | make sure Mongod is runing in background
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
8. POSSIBLE  CONNECTION ERROR - OPEN BACK UP WITH THIS CODE in TERMINAL
* 1.  `mongod --config /usr/local/etc/mongod.conf --fork`
* 2. `mongo`

### Creating our Model
9. 

### Products Index

### Product Details

### Creating Products

### Updating Products

### Tangent On Category Selector

### Deleting Products

### BONUS: Filtering By Category