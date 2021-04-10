//REQUIRE MONGOOSE
const mongoose = require('mongoose');
const { Schema } = mongoose;

//CREATE SCHEMA
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

//COMPILE OUR MODEL
const Product = mongoose.model('Product', productSchema);

//EXPORT OUR MODEL
module.exports = Product;