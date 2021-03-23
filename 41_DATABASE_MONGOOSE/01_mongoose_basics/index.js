const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err)
});

// CREATE SCHEMA FOR MOVIE
/*
{
  title: 'Amadeus', --> string
  year: 1986, --> num
  score: 9.2, --> num
  rating: 'R' --> string
}
*/
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})
// Tell Mongoose to make a model with that Schema --> Pass in String with name of Model (Singular and Capitalized, mongo creates collections "movies") --> then Schema name --> save to variable and this gives us a CLASS with the name of Movie
const Movie = mongoose.model('Movie', movieSchema)
//Make new instances of Movie class and save them to MongoDB
const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'}) 
//NOTHING has been created in Mongo yet until you save it