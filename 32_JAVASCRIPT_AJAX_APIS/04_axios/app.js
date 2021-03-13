/*
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log('BTC Price:', res.data.ticker.price)
  })
  .catch(err => {
    console.log('ERROR!', err)
  })
*/

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log('BTC Price:', res.data.ticker.price)
  } catch(e) {
    console.log('ERROR!')
  }
}
fetchBitcoinPrice();

////////////// HEADERS AND AXIOS ///////////
// Create selector for jokes and button
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

//create function for adding new Joke
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText)
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI)
}
// CREATE FUNCTION FOR GETTING NEW JOKE FROM API
const getDadJoke = async () => {
  try {
    // create variable for headers first
    const config = { headers:{ACCEPT: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
  } catch(e) {
    console.log('NO JOKES AVAILABLE!!')
  }
};

//create click listener for button
button.addEventListener('click', addNewJoke);

