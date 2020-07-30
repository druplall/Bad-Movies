const mysql = require('mysql');
const Promise = require('bluebird');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database as id: ' + connection.threadId);
});

connection.queryAsync = Promise.promisify(connection.query);

module.exports = connection;
