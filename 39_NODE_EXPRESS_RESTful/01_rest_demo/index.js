const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//TELL EXPRESS TO PARSE FORM ENCODED INFORMATION FOR REQUEST BODY
//USE THIS MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
//ANTICIPATE JSON DATA// BUILT IN PARSING MIDDLEWARE
app.use(express.json()) //application.json

// BASIC GET ROUTE
app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

//BASIC POST ROUTE
app.post('/tacos', (req, res) => {
  console.log(req.body)
  const { meat, qty } = req.body;
  res.send(`Heare are your ${qty} ${meat} tacos`)
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})