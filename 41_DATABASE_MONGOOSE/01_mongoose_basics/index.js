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
//////////////////////////////===========================///////////////////////////////////
//Make new instances of Movie class and save them to MongoDB
/* const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'}) */
//NOTHING has been created in Mongo yet until you save it - must call .save() for one instance of a model
//////////////////////////////===========================///////////////////////////////////
//INSERT MANY --> Not Used very often 
// TAKES TIME - RETURNS A PROMISE - DO NOT NEED TO CALL SAVE for this Process
/*
Movie.insertMany([
  { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
  { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
  { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
  { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
  { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
]) //chain on a .then for the data (probably and err handling too)
  .then(data => {
    console.log("IT WORKED!");
    console.log(data);
  })
  */
 //////////////////////////////===========================///////////////////////////////////
 
