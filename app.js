const client = require('./database');

(async ()=>{
 client.connect();
const result = await client.query(`insert into info(name, email)
  values($1,$2) RETURNING *` , ['Anita Serwaa','serwaa@hello.com']);
  console.log(result.rows);
  console.log(result.rowCount);
  client.end();
})();