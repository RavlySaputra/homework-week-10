const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movie',
  password: 'benizhang123',
  port: 5432,
});

module.exports = pool;