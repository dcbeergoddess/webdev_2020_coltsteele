const mongoose = require('mongoose');
const Product = require('./product.js');
const { Schema } = mongoose;

//CREATE SCHEMA
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

//findOneAndDelete - MONGOOSE MIDDLEWARE
farmSchema.post('findOneAndDelete', async function (farm) {
  //If products is not an empty array --> take each one of those products and delete them 
  if(farm.products.length) {
    //select using id and select all products where id is in farm products
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  };
});

//COMPILE OUR MODEL
const Farm = mongoose.model('Farm', farmSchema);

//EXPORT OUR MODEL
module.exports = Farm;