const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'details',
  password: 'password',
  port: 5432,
})

client.on("connect" ,() =>{
  console.log("Database connected")
})

console.log('hi')

client.on("end",() => {
  console.log("Connection ended")
})

module.exports = client;