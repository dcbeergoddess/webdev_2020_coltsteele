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
    min: [0, 'Price must be positive!!!']
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
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
});

/*
productSchema.methods.greet = function() {
  console.log('HELLO!!!! ');
  console.log(`- from ${this.name}`);
}
*/
//NEW METHOD INSTANCE
productSchema.methods.toggleOnSale = function () {
  // set it equal to the opposite from true or false (toggle)
  this.onSale = !this.onSale;
  // `this` refers to the particular instance of product
  return this.save();
}; //should eventually put in error handling

//Create new category
productSchema.methods.addCategory = function (newCat) {
  //reference this.categories and push into array
  this.categories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, {onSale: true, price: 0})
};

//CREATE A MODEL WITH SCHEMA
const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Mountain Bike'});
  // foundProduct.onSale = !foundProduct.onSale;
  // foundProduct.greet();
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  //add category
  await foundProduct.addCategory('Outdoors');
  console.log(foundProduct);
}
// findProduct();
//fireSale is a method on product
Product.fireSale().then(res => console.log(res));

//CREATE PRODUCT
// const bike =  new Product({name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'L'});
// bike.save()
//   .then(data => {
//     console.log("IT WORKED!")
//     console.log(data)
//   })
//   .catch(e => {
//     console.log("ON NO! ERROR!")
//     console.log(e)
//   });
//UPDATING PRODUCTS
// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -100}, {new: true, runValidators: true})
//   .then(data => {
//     console.log("IT WORKED!")
//     console.log(data)
//   })
//   .catch(e => {
//     console.log("ON NO! ERROR!")
//     console.log(e)
//   });

