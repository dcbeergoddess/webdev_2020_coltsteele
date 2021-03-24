const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

//More Information you can give Schema
//required properties - built in validations
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
})

//CREATE A MODEL WITH SCHEMA
const Product = mongoose.model('Product', productSchema);

//CREATE PRODUCT
const bike =  new Product({name: 'Bike Helmet', price: 19.50, categories: ['Cycling', 'Safety']});
bike.save()
  .then(data => {
    console.log("IT WORKED!")
    console.log(data)
  })
  .catch(e => {
    console.log("ON NO! ERROR!")
    console.log(e)
  });



