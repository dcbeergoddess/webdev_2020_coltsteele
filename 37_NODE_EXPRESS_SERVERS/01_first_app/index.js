const express = require('express');
const app = express(); //Execute Express & Save to Variable
// console.dir(app)
PORT = 8080

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST") //EVERY TIME A REQUEST HIT OUR SERVER WE PRINT THIS OUT(refresh page)
//   res.send(`<h1>THIS IS MY WEBPAGE</h1>`); //get a response on the server/localhost:8080 
// })

//ROUTE ROUTE
app.get('/', (req, res) => {
  res.send('THIS IS THE HOME PAGE')
});

//PATH PARAMS | PATTERNS
app.get('/r/:subreddit', (req, res) => {
  console.log(req.params); // {subreddit: "param"}
  const { subreddit } = req.params;
  res.send(`<h1> Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/comments/:postId', (req, res) => {
  console.log(req.params); // {subreddit: "param"}
  const { subreddit, postId } = req.params;
  res.send(`<h1> Viewing Post ID: ${postId} the ${subreddit} subreddit</h1>`);
})

//POST REQUEST | DIRECT MATCH
app.post('/cats',(req, res) => {
  res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT FROM A GET REQUEST')
})
//GET REQUESTS | DIRECT MATCH
app.get('/cats', (req, res) => {
  // console.log("CAT REQUEST!!!!")
  res.send('MEOW!!!')
});
app.get('/dogs', (req, res) => {
  // console.log("DOG REQUEST!!!!")
  res.send('WOOF!!!')
});

//GENERIC RESPONSE FOR WRONG PATHS
app.get('*', (req, res) => {
  res.send(`I do not know that path!`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}` )
}); //listen on port