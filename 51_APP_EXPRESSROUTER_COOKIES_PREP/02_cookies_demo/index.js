const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

//USE COOKIES
app.get('/greet', (req, res) => {
  // console.log(req.cookies);
  const { name = 'No-name' } = req.cookies;
  res.send(`Hey There, ${name}!`)
})

//SEND COOKIES
app.get('/setname', (req, res) => {
  res.cookie('name', 'hookncoder')
  res.cookie('animal', 'harlequin shrimp')
  res.send('OK Sent you a Cookie')
})

//SIGNED COOKIES
app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true })
  res.send('Ok Sent a Signed Cookie')
})

//VERIFY SIGNED COOKIE
app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies)
  console.log(req.signedCookies)
  res.send(req.signedCookies)
})

app.listen(8080, () => {
  console.log("SERVING")
})