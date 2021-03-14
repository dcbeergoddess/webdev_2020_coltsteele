const jokes = require('give-me-a-joke');
console.dir(jokes);

const colors = require('colors');
const cowsay = require('cowsay');


jokes.getRandomDadJoke(function (joke) {
  console.log(joke.zebra);
});

const category = "animal"
jokes.getRandomJokeOfTheDay(category, function (joke) {
  console.log(joke.rainbow);
});

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));