// Use the Express package. 
const express = require("express");

const app = express();

// Allow Express to use the HTTP module of Node. 

const http = require("http").Server(app);

// Tells Express/HTTP what port to listen to. 

http.listen(3000);

console.log("Express server is running on port 3000.");