# Connecting to Mongo With Mongoose

## Crucial 

### * The Role of ORM/ODM's
### * Connecting Mongoose to Mongo
### * Defining A Model
### * Mongoose CRUD
### * Schema Constraints

<br>

## Important 

### * Model Instance & Static Methods
### * Mongoose Middleware

<br>

## Nice to Have

### * Mongoose Virtuals

<br>

## Notes

<hr>

### What is Mongoose
- [Mongo Drivers](https://docs.mongodb.com/drivers/) - Connect to Mongo - Node.js 
[MONGOOSE](https://mongoosejs.com/)
* `ODM`: Object Data/Document Mapper : Map documents coming from a database into usable JavaScript Objects
* mongoDB -----> JS
* Provides ways for us to model out our application data and define a schema
* Offers easy ways to validate data and build complex queries from the comfort of JS


### Connecting Mongo to Mongoose
- REFERENCE DOCS | THESE LINES YOU DO ONCE PER PROJECT
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```
- Handling Connection Errors
```js
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN!")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});
```

### Our First Mongoose Model

### Insert Many

### Finding With Mongoose

### Updating With Mongoose

### Deleting With Mongoose

### Mongoose Schema Validations

### Additional Schema Constraints

### Validating Mongoose Updates

### Mongoose Validation Errors

### Model Instance Methods

### Mongoose Virtuals

### Defining Mongoose Middleware