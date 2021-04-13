const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
  // console.log(req.cookies);
  const { name = 'No-name' } = req.cookies;
  res.send(`Hey There, ${name}!`)
})

app.get('/setname', (req, res) => {
  res.cookie('name', 'hookncoder')
  res.cookie('animal', 'harlequin shrimp')
  res.send('OK Sent you a Cookie')
})

app.listen(8080, () => {
  console.log("SERVING")
})