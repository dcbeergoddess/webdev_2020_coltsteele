const express = require('express');
const app = express(); //Execute Express & Save to Variable
// console.dir(app)
PORT = 3000

app.use(() => {
  console.log("WE GOT A NEW REQUEST")
}) //EVERY TIME A REQUEST HIT OUR SERVER WE PRINT THIS OUT

app.listen(PORT, () => {
  console.log(`LISTENING ON http://localhost:${PORT}` )
}) //listen on port