const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//DESTRUCTURE VERSION
const { Schema } = mongoose;

//CONNECT TO DATABASE
mongoose.connect('mongodb://localhost:27017/relationshipDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

//Child Model 
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter']
  }
});

//Parent Model
const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectID, ref:'Product' }]
})

//COMPILE MODELS
const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema)

/* SUCCESSFULLLY INSERTED
Product.insertMany([
  {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
  {name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer'},
  {name: 'Asparagus', price: 3.99, season: 'Spring'}
]);
*/


//In Web App you would make a farm and later on a different page you would add products, or you would make a user account and later you would add comments
//EXAMPLE 
/*
const makeFarm = async () => {
  const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
  const melon = await Product.findOne({ name: 'Goddess Melon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
}

makeFarm();
*/

//EXAMPLE 2 --> ONE TO MANY
const addProduct = async () => {
  //HARD CODE IN FARM
  const farm = await Farm.findOne({ name: 'Full Belly Farms' });
  const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon'});
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
};

addProduct();