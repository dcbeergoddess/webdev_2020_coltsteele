const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// BASIC GET ROUTE

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
  res.send('POST /tacos response')
})

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}`)
})