const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  //Write a code here for endpoint /product/:productId and also print parameter in json form

  req.params
  res.status(200).json(req.params);

});

module.exports = app;
