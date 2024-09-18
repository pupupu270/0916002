

require("dotenv").config();

const  {Client} = require("pg");

const sql= new Client({
connectionString:process.env.CONNECTION_STRING
});
sql.connect();

sql.end();




let http = require("http");
let fs = require("fs");


http.createServer((req, res) => {

    console.log(req.url);
    if (req.url == "/")
        req.url = "/index.html";

    fs.readFile(__dirname + "/html" + req.url, (err, data) => {

        if (err == null)
        {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });

  

}).listen(2000);
