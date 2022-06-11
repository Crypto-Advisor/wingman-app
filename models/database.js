const { Pool } = require('pg');

const pool = new Pool({
  user: 'adrien',
  host: 'localhost',
  database: 'wingman',
  port: '5432',
});

module.exports = pool; 