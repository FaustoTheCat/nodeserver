'use strict'

const server = require('http');

const  express = require('express');
const  app = express(),
       port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port '  + port);
});
