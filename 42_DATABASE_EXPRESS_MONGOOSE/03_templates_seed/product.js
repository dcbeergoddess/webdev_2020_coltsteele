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
  category: {
    type: String,
    lowercase: true,
    enum: ['fruit', 'vegetable', 'dairy']
  }
});

//COMPILE OUR MODEL
const Product = mongoose.model('Product', productSchema)

//EXPORT OUR MODEL
module.exports = Product;