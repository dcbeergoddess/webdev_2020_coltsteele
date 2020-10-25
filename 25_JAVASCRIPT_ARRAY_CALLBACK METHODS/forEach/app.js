const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

function print(el){
  console.log(el)
}
print(numbers[1])
console.log("******FOREACH******")
numbers.forEach(print)



console.log("******FOREACH W/ ANYMOUS FUNC******")
//using this function for only this moment in time
numbers.forEach(function (el) {
  console.log(el)
})

console.log("******NEWER WITH FOR..OF******")
for( let el of numbers) {
  console.log(el)
}
console.log("******EVEN NUMBERS******")
numbers.forEach(function(el){
  if(el % 2 === 0){
    console.log(el)
  }
})

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

//Print out movie title - score/100

movies.forEach(function(movie){
  //movie will be each element one at a time from the array
  //we are not calling this we are just writing
  console.log(`${movie.title} - ${movie.score}/100`)
})