'use strict';

const mysql = require('mysql');

const db = mysql.createConnection({
  hots: 'localhost',
  user: 'root',
  password: '',
  database: 'node_mysql'
});

db.connect(function (err) {
  if (err) throw err;
  console.log('Database connected');
});

module.exports = db;
