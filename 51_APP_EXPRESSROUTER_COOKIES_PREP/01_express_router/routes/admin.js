const express = require('express');
const router = express.Router();

  router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET')
  })
  router.get('/deleteeverything', (req, res) => {
    res.send('OK DELETED IT ALL!!')
  })

module.exports = router;