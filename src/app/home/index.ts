const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const events = require("./events");

const connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "bffa66cd9b9988",
  password: "e04d58f2",
  database: "heroku_fa1c49f5534ae71"
});

connection.connect(function(err) {
  if (err) throw err;
  else console.log("Database connected");
});

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
