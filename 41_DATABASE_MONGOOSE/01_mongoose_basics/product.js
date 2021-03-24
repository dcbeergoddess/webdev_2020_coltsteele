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
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

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



