# First step - Install
1. `npm init -y`
2. `npm install pg`
3. Create file (database.js) and create your object class at the top=> const { Client } = require('pg');
4. Connect to your database *table* 
5. Copy and cut your connection. Create a new file[app.js] and insert it there.
6. Export connection - `module.exports = client;`
7. In app.js, include the code below and run '$ node app.js'
```
const client = require('./database')

client.connect();


client.query(`select * from info where info_id=$1`,[2], (err,result) => {
  if(!err){
    console.log(result.rows);
  }
  client.end();
})
```

8. Adding asyn and await to code in app.js
```
(async ()=>{
 client.connect();
const result = await client.query(`select * from info where info_id=$1`,[2])
    console.log(result.rows);
  client.end();
})();
```

9. Inserting
```
(async ()=>{
 client.connect();
const result = await client.query(`insert into info(name, email)
  values($1,$2) RETURNING *` , ['Anita Serwaa','serwaa@hello.com']);
  console.log(result.rows);
  console.log(result.rowCount);
  client.end();
})();
```
Connected successfully