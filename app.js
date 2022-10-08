/*
"use strict";

const express = require("express");

// Constants
const PORT = 3000;
//const HOST = "127.0.0.1";
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

//app.listen(8080);
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
