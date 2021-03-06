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
- `Movie.find({}).then(data => console.log(data))`
![Find All](assets/find.png)
- `Movie.find({rating: 'PG-13'}).then(data => console.log(data))`
![Find By Parameters](assets/find1.png)
* `Model.findOne()`
- `Movie.findOne({}).then(m => console.log(m))` --> find's first instance
![Find One](assets/find2.png)
- When writing async functions we can use the `.exec` - turns into promise instead of thenable object
* `Model.findById()`
- `Movie.findById('605a520e9c51c61b9ab4e28d').then(m => console.log(m))`
![Find By Id](assets/find3.png)

### Updating With Mongoose
- They do not return/resolve with the updated info - will show if it was updated or error but does not show data that was updated
* `Model.update()`
* `Model.updateOne()` : Match first thing that you find
- `Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))`
![UPDATE ONE](assets/update.png)
![UPDATED OBJECT](assets/update1.png)
* `Model.updateMany()`
- Find in DB to test
- `db.movies.find({title: {$in: ['Amadeus', 'Stand By Me']}})`
- Update iin Mongoose
- `Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res))`
![UPDATE MANY](assets/update2.png)
* `Model.findOneAndUpdate()`: find something based upon criteria and it will give us the object after the update is applied
- `Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.0}).then(m => console.log(m))` --> returned old object without update
![Find and Update](assets/update3.png)
- need to specify option 
- `new: true` option: `Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.0}, {new: true}).then(m => console.log(m))`
![Find and Update, NEW](assets/update4.png)

### Deleting With Mongoose
- Removes, but does not give data back to show what was deleted
* `Model.remove()`
- `Movie.remove({title: 'The Iron Giant'}).then(msg => console.log(msg))` | DELETED BOTH INSTANCES | DEPRECATION WARNING
![delete with Model.remove()](assets/delete.png)

* `Model.deleteMany()` 
- after 1999 
- `Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))`
![Delete Many](assets/delete1.png)
* `Model.findOneAndDelete()` or `Model.findByIdAndDelete` : get back what you are deleting
- `Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m))`
![Delete One and Return Data being Deleted](assets/delete2.png)

### Mongoose Schema Validations
- More you can do with the Schema
- required values
```js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
});
```
```js
//CREATE A MODEL WITH SCHEMA
const Product = mongoose.model('Product', productSchema);

//CREATE PRODUCT
const bike =  new Product({name: 'Mountain Bike', price: 999, color: "red"});
bike.save()
  .then(data => {
    console.log("IT WORKED!")
    console.log(data)
  })
  .catch(e => {
    console.log("ON NO! ERROR!")
    console.log(e)
  });
```
### Additional Schema Constraints
- [SchemaType Options](https://mongoosejs.com/docs/schematypes.html#schematype-options)
- Declare certain options - i.e, `default` values
```js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  onSale: {
    type: Boolean,
    default: false
  }
})
```
- custom validators 
- Constraints for Strings (lowercase, uppercase, trim, min, max length) - packages that help with this, email, etc.
```js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  onSale: {
    type: Boolean,
    default: false
  }
})
```
- SET UP CATEGORIES - Array existing only of strings `categories: [String]`
```js
//CREATE PRODUCT
const bike =  new Product({name: 'Bike Helmet', price: 19.50, categories: ['Cycling', 'Safety', 123]});
bike.save()
  .then(data => {
    console.log("IT WORKED!")
    console.log(data)
  })
  .catch(e => {
    console.log("ON NO! ERROR!")
    console.log(e)
  });
```
- NESTED SUB DOCUMENTS
```js
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String],
    default: ['cycling']
  }, 
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  }
```
### Validating Mongoose Updates
- Products are being created but right now we can not update them with the validations, ORM, ODM --> when it's being updated you need to tell mongoose that you still want it to apply our validations
- `Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -100}, {new: true, runValidators: true})`

### Mongoose Validation Errors
- Custom Error Msgs - for wrong price
```js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive!!!']
  },
  onSale: {
    type: Boolean,
    default: false
  },
```
- Error Handling and Messaging Packages Available
- Usually check price before you would be saving it to a database, etc.
- `enum` : Array, creates a validator that checks if the value is in the given array
```js
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
})
```
### Model Instance Methods
[Mongoose Docs Instance Methods](https://mongoosejs.com/docs/guide.html#methods)
- OUR CUSTOM METHODS!!!!
- Instance vs Class/Static Methods
- Instance Method is available on every single instance versus a class or static method like being able to call methods on Products like `Product.find()`
- calling `.save()` on making new Product you are using that on a instance of Product
- Define our own `someSchema.methods.yourMethod = function()`
- USE TRADITIONAL FUNCTION SYNTAX - the value of `this` changes
```js
productSchema.methods.greet = function() {
  console.log('HELLO!!!!')
  console.log(`- from ${this.name}`);
}
```
- type node in console while in folder, run `.load product.js`
- In console
```js
const p = new Product({name: 'bike bag', price: 10})
//INSTANCE OF PRODUCT

//NOW call 
p.greet() //Have access to this when we find
```
```js
const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Bike Helmet'});
  foundProduct.greet();
}
//USUALLY YOU WOULD HAVE TRY AND CATCH
findProduct();
// Hello!!
//- from Bike Helmet
```
- group functionality on where it should go

#### onSale Toggle instance Method
* Create method instance
```js
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save(); //it takes time to return the `thenable`
}; 
```
- Find product by name and toggle the opposite of onSale
```js
//CREATE A MODEL WITH SCHEMA
const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Mountain Bike'});
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
};

findProduct();
```
- IN CONSOLE
![Console Print Out](assets/mongoose.png)

- Methods to help you update the values in your model instead of writing logic over and over again, extract it into a method
- ADD NEW CATEGORY
```js
productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};
```
```js
const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Mountain Bike'});
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory('Outdoors');
  console.log(foundProduct);
};

findProduct();
```
### Adding Model Static Methods
[Statics Docs](https://mongoosejs.com/docs/guide.html#statics)
- Live on the model itself and not instances of the model. `this` refers to the model class itself
```js
//set every product on sale set to true and a price of 0
productSchema.statics.fireSale = function () {
  return this.updateMany({}, {onSale: true, price: 0})
}

//do this usually in a async function
Product.fireSale().then(res => console.log(res))
```
- Fancy find, or fancy update, fancy create or fancy removal, etc. | usually built on top of  existing model methods like `find()` or `update()`
- Methods on the Class/Model
- `Instance methods` operate on individual instances of a model - i.e `addCategory()` or `toggleOnSale()`

### Mongoose Virtuals
- [Virtuals Docs](https://mongoosejs.com/docs/guide.html#virtuals)
- ability to add `properties` to a schema that don't actually exist in the database itself
#### Classic First Example
- [Person/User Model](01_mongoose_basics/person.js)
- Want to access full name even though it doesn't exist in the database, you have first and last name
- you can define a getter and a setter - this will be `.get()` - want to retrieve some `value` and it will behave like an actual `property` instead of just writing an `instance method` - hence virtual
##### GET
```js
const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

personSchema.virtual('fullName').get(function () {
  //this refers to instance we are working with 
  return `${this.first} ${this.last}`
});
```
![virtual get example](assets/virtual.png)
##### SET
- take property/value of fullName and use that to update first and last name
- `tammy.fullName = 'Tammy Xiao'`
![virtual set syntax](assets/virtualSet,png)

### Defining Mongoose Middleware
- [Middleware Docs](https://mongoosejs.com/docs/middleware.html)
- ability to run code before and after certain mongoose methods are called
- Middleware (also called pre and post _hooks_) are functions which are passed control during the during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.
- times you remove a user, you may also need to delete all associated comments, and posts, etc. - use middleware to help us
- `.pre()` and `.post()`
```js
  // can either us `next` that you pass in
  // or make a promise/async function 
personSchema.pre('save', async function () {
  console.log("About to Save")
})
personSchema.post('save', async function () {
  console.log("Just Saved")
})
```
![middleware console](assets/middleware.png)
- Create a Troll Pre Middleware
```js
personSchema.pre('save', async function () {
  this.first = 'YO';
  this.last = 'MAMA';
  console.log("ABOUT TO SAVE!!!!")
})

personSchema.post('save', async function () {
  console.log("JUST SAVED!!!!")
})
```
![middleware console](assets/middleware.png)

- if you have review site you could make a post middleware/hook that updates the average review score

