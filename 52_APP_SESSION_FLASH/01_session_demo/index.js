const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({ secret: 'thisisnotagoodsecret' }));

//SESSIONS EXAMPLE
app.get('/viewcount', (req, res) => {
  res.send("YOU HAVE VIEWED THIS PAGE X TIMES")
})

app.listen(8080, (req, res) => {
  console.log('SERVING!')
})