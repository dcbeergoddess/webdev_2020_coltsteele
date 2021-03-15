const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//TELL EXPRESS TO USE EJS
app.set('view engine', 'ejs');
//access outside of being in directory of app
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})