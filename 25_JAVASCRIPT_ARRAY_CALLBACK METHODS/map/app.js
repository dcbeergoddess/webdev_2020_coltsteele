//MAP
//CREATES NEW COPIED ARRAY

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

//DOUBLE EVERY NUMBER
const doubles = numbers.map(function(num){
  return num * 2;
})
console.log(doubles)

//MOVIES ARRAY WITH OBJECTS
console.log("******Movie Array******")
const movies = [
  {
      title: 'Amadeus',
      score: 99
  },
  {
      title: 'Stand By Me',
      score: 85
  },
  {
      title: 'Parasite',
      score: 95
  },
  {
      title: 'Alien',
      score: 90
  }
]

const titles = movies.map(function(movie){
  return movie.title.toUpperCase()
})

console.log(titles)
console.log("******Movie ARROW FUNCTION******")
const newMovies = movies.map(movie => (
  console.log(`${movie.title} - ${movie.score} / 100`)
));



//RETURN ARR THAT IS TRIMMED
function cleanNames(arr){
  return arr.map(function(el){
      return el.trim()
  })
}