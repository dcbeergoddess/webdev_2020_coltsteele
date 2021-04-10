# Mongo Relationships w/ Express

## Crucial 

### * Deleting with Mongo Middleware

<br>

## Important 

### * Defining Our Farm & Product
### * Creating Farms
### * Farms Show Page

<br>

## Notes
- WORK WITH TWO MODELS IN AN EXPRESS APP:
1. Farm
2. Product

<hr>

### Defining Our Farm & Product Models
- Work from Farm Stand App Created in section `42_DATABASE_EXPRESS_MONGOOSE`
- We want each product to be associated with a farm
- Dashboard for someone who runs the farm stand
- Define farm model
- How do we want to connect farm to product --> One to Many --> How to access and plan to use data
- Don't want to embed products in the farm, you want to be able to see all products on a page
- PRIMARY FUNCTION TO VIEW ALL PRODUCTS
- 1. could put products array of ObjectsIds in farm
- 2. or set farm ID on each product
- Would be name to see name of farm on show page for product
- LETS SET UP TWO WAY RELATIONSHIP
- ON PRODUCT MODEL:
```js
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    require: true,
    min: [0, 'NO NEGATIVE PRICES!!!']
  },
  category: {
    type: String,
    lowercase: true,
    enum: ['fruit', 'vegetable', 'dairy']
  },
  farm: {
    type: Schema.Types.ObjectId,
    ref: 'Farm'
  }
});
```
- ON FARM MODEL: 
```js
const farmSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Farm must have a name!']
  },
  city: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email required']
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});
```

- MAKE SURE TO HAVE THS AT END OF MODELS TO USE IN OTHER PARTS:
```js
const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;
```
### Creating New Farms

### Farms Show Page

### Creating Products for A Farm

### Finishing Touches

### Deletion Mongoose Middleware