const mongoose = require('mongoose');
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

//COMPILE OUR MODEL
const Farm = mongoose.model('Farm', farmSchema);

//EXPORT OUR MODEL
module.exports = Farm;