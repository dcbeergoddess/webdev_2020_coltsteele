// FILTER
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];

const newNumbers = numbers.filter(n => {
  return n < 10;
})

console.log(newNumbers)

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

const goodMovies = movies.filter(m => m.score > 80);

console.log('****GOOD MOVIES*****')
console.log(goodMovies)

const badMovies = movies.filter(m => m.score < 70);

console.log('****BAD MOVIES*****')
console.log(badMovies)

const recentMovies = movies.filter(m => m.year > 2000);

console.log('****RECENT MOVIES*****')
console.log(recentMovies)

//FILTER AND MAP RETURN 

const goodTitles = movies.filter(m => m.score > 80).map(m => m.title)
console.log('****GOOD MOVIES | TITLES ONLY*****')
console.log(goodTitles)


//EXERCISE: RETURN NEW ARRAY WITH USERNAMES LESS THAN 10 CHARACTERS;
function validUserNames(arr) {
  return arr.filter(str => str.length < 10);
}
