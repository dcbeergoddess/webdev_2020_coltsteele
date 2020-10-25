const testReduce = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(testReduce)

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for(let price of prices){
  total += price;
}

console.log(total)

console.log('***new total****')

const newTotal = prices.reduce((total, price) => {
  return total * price;
})
console.log(newTotal)

//FIND MIN PRICE IN ARRAY
console.log('***min price****')
const minPrice = prices.reduce((min, p) => {
  if(p < min){
    return p;
  } 
  return min
})
console.log(minPrice)

//FIND MAX PRICE IN ARRAY
console.log('***max price****')
const maxPrice = prices.reduce((max, p) => {
  if(p > max){
    return p;
  } 
  return max
})
console.log(maxPrice)

//MOVIES ARRAY WITH OBJECTS
console.log("******Movie Array******")
const movies = [
  {
      title: 'Amadeus',
      score: 99,
      year: 1984
  },
  {
      title: 'Sharknado',
      score: 35,
      year: 2013
  },
  {
      title: '13 Going On 30',
      score: 70,
      year: 2004
  },
  {
      title: 'Stand By Me',
      score: 85,
      year: 1986
  },
  {
      title: 'Waterworld',
      score: 62,
      year: 1995
  },
  {
      title: 'Jingle All The Way',
      score: 71,
      year: 1996
  },
  {
      title: 'Parasite',
      score: 95,
      year: 2019
  },
  {
      title: 'Notting Hill',
      score: 77,
      year: 1999
  },
  {
      title: 'Alien',
      score: 90,
      year: 1979
  }
]

//FIND HIGHEST RATED MOVIE
console.log('***HIGHEST RATED MOVIE***')

const bestMovie = movies.reduce((highRate, currMovie) => {
  if(currMovie.score > highRate.score){
    return currMovie;
  } 
  return highRate;
})
console.log(bestMovie)

//SPECIFY STARTING POINT
//pass in second argument
const evens = [2, 4, 6, 8];
console.log('****ARRAY SUM*****');
const arrOnly = evens.reduce((sum, num) => sum + num);
console.log(arrOnly);
console.log('****100 + ARRAY SUM*****');
const arrPlus = evens.reduce((sum, num) => sum + num, 100);
console.log(arrPlus);
