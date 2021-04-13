const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');

app.use('/', shelterRoutes);

app.listen(8080, () => {
  console.log('Serving app on localhost:8080;')
})