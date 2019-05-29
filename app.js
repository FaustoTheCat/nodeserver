'use strict'

const server = require('http');

const  express = require('express');
const  app = express(),
       port = 3000;


app.get('/', function (req, res) {
  var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
      }
    }
  res.sendFile('index.html', options, function(err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent: index.html');
    }
  });
});

app.get('/app', function (req, res) {
  res.send('bist im app Zweig gelandet');
});
app.get('*', function (req, res) {
  res.return(404).send('Gehen Sie weiter, hier gibt es nichts zu sehen!');
});

app.listen(port, function () {
  console.log('Example app listening on port '  + port);
});
