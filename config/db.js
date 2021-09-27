const { Pool } = require('pg')
require('dotenv').config()

const Client = require('pg').Client

let pool

if (process.env.NODE_ENV === "production") {
    pool = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        }
    })
}else{
    pool = new Client({
        database: "db_profile",
        host: "localhost",
        user: "postgres",
        password: "root",
        port : 5432
    })
}

pool.connect()
module.exports = pool

/*const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_latihan',
    password: 'Tengil48!',
    port: 5432
})


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    options : {
      rowCollectionOnRequestCompletion : true   // add this line
  }
    
  });
  

console.log('connect to database')

module.exports = pool
*/