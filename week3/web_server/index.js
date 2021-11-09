// Use the Express package. 
const express = require("express");

const app = express();

// Allow Express to use the HTTP module of Node. 

const http = require("http").Server(app);

const port = 3000;

// Tells Express/HTTP what port to listen to. 

http.listen(port); //Common Development Ports: 8080, 3000 = Node.

console.log("Express server is running on port " + port + ".");

//Express Routes. Allow us to "redirect" a URL filepath to a specific folder. 

app.use("/" , express.static("public_html/"));
