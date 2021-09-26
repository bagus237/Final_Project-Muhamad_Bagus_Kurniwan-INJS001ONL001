const { Pool } = require('pg')
require('dotenv').config()

/*const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_latihan',
    password: 'Tengil48!',
    port: 5432
})
*/

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });
  
console.log('connect to database')

module.exports = pool