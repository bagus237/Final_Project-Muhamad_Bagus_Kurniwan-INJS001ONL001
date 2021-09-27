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
        database: "db_latihan",
        host: "localhost",
        user: "postgres",
        password: "Tengil48!",
        port : 5432
    })
}

pool.connect()
module.exports = pool

