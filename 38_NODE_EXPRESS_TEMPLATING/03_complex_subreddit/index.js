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


app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})