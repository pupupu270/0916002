

require("dotenv").config();

console.log("console says="+process.env.CONNECTION_STRING);


const  {Client} = require("pg");

const sql_client = new Client({
connectionString:process.env.CONNECTION_STRING
});
sql_client.connect();

sql_client.end();
