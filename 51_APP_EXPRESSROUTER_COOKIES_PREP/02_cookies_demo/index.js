const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  res.send("HEY THERE!")
})

app.get('/setname', (req, res) => {
  res.cookie('name', 'hookncoder')
  res.cookie('animal', 'harlequin shrimp')
  res.send('OK Sent you a Cookie')
})

app.listen(8080, () => {
  console.log("SERVING")
})