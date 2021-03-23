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
- Define Model for Movie --> FIRST CREATE `SCHEMA` --> SCHEMA maps to a MongoDB collection and defines the shape of the documents within that collection
```js
// DEFINING YOUR SCHEMA
  import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });
```
![Schema and Save](assets/schema.png)

### Insert Many

```js
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
  .then(data => {
    console.log("IT WORKED!");
    console.log(data);
  })
```

### Finding With Mongoose
* `Model.find()` - returns query object --> Treat like promises for error handling - are thenable objects
`Movie.find({}).then(data => console.log(data))`
![Find All](assets/find.png)
`Movie.find({rating: 'PG-13'}).then(data => console.log(data))`
![Find By Parameters](assets/find1.png)
* `Model.findOne()`
`Movie.findOne({}).then(m => console.log(m))` --> find's first instance
![Find One](assets/find2.png)
- When writing async functions we can use the `.exec` - turns into promise instead of thenable object
* `Model.findById()`
`Movie.findById('605a520e9c51c61b9ab4e28d').then(m => console.log(m))`
![Find By Id](assets/find3.png)


### Updating With Mongoose

### Deleting With Mongoose

### Mongoose Schema Validations

### Additional Schema Constraints

### Validating Mongoose Updates

### Mongoose Validation Errors

### Model Instance Methods

### Mongoose Virtuals

### Defining Mongoose Middleware