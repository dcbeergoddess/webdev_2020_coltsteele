const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
// require data file
const redditData = require('./data.json');
console.log(redditData);

//SERVE UP FILES
app.use(express.static(path.join(__dirname, 'public')));

//TELL EXPRESS TO USE EJS
app.set('view engine', 'ejs');
//access outside of being in directory of app
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cats', (req, res) => {
  const cats = [
    'Jade', 'Samson', 'Philip', 'Freya', 'Ninja'
  ];
  res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  console.log(data) //should get print out of data
  if (data) {
  res.render('subreddit', { ...data }) //spread data and access individual properties
  } else {
    res.render('notfound', { subreddit })
  }
})

//GENERATE RANDOM NUMBER
app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  //PASS IN SECOND ARGUEMENT OF KEY VALUE PAIRS
  res.render('random', { num });
  //WHATEVER NUM IS WILL BE AVAILABLE IN TEMPLATE UNDER RAND
})

//GENERIC RESPONSE FOR WRONG PATHS
app.get('*', (req, res) => {
  res.send(`I do not know that path!`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})