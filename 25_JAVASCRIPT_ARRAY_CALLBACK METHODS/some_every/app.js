const exams = [80, 98, 92, 70, 77, 90, 89, 84, 81, 77]
console.log('*****ARE ALL SCORES GREATER THAN 75******')
console.log(exams.every(score => score >= 75)); //false

console.log('*****ARE ANY SCORES LESS THAN 75*******')
console.log(exams.some(score => score <= 75)); //true


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
      year: 2010
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

console.log('*****ANY MOVIE CREATED DURING OR AFTER 2013*****')
console.log(movies.some(m => m.year >= 2013)); //true

//EXERCISE
//CHECK IF EVERY NUMBER IN AN ARR IS EVEN, RETURN TRUE 
function allEvens(arr) {
  return arr.every(n => n % 2 === 0)
}