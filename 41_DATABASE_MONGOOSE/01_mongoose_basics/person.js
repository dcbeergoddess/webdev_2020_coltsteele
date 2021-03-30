const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

//CREATE SCHEMA
const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

// VIRTUAL - GET fullName
personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
});

//CREATE MODEL
const Person = mongoose.model('Person', personSchema);

