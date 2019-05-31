'use strict'

const config = require('./config');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: config.dbhost,
  user: config.dbuser,
  password: config.dbpass,
  database: 'leafspy'
});
con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

module.exports = con;
