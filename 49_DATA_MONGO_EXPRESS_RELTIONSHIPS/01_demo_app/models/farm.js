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

//PRE vs POST EXAMPLE - MONGOOSE MIDDLEWARE
// pass in string which is the middleware
// then write function --> async function --> do not need to call next() --> just return a promise --> unlike express middleware 
farmSchema.pre('findOneAndDelete', async function(data) {
  console.log("PRE MIDDLEWARE");
  console.log(data);
});

farmSchema.post('findOneAndDelete', async function(data) {
  console.log("POST MIDDLEWARE");
  console.log(data);
});

//COMPILE OUR MODEL
const Farm = mongoose.model('Farm', farmSchema);

//EXPORT OUR MODEL
module.exports = Farm;