const express = require('express');
const app = express(); //Execute Express & Save to Variable
// console.dir(app)
PORT = 8080

app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST") //EVERY TIME A REQUEST HIT OUR SERVER WE PRINT THIS OUT(refresh page)
  res.send(`<h1>THIS IS MY WEBPAGE</h1>`); //get a response on the server/localhost:8080 
}) 

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}` )
}) //listen on port