// Use the Express package. 
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// Allow Express to use the HTTP module of Node. 

const http = require("http").Server(app);

app.use (express.json({strict:false}));
app.use (express.json({extended:true}));


const http = require("http").Server(app);

const port = 3000;

// Tells Express/HTTP what port to listen to. 

http.listen(port); //Common Development Ports: 8080, 3000 = Node.

//console.log("Express server is running on port " + port + ".");

//Express Routes. Allow us to "redirect" a URL filepath to a specific folder. 

app.use("/" , express.static("public_html/"));

app.post("/test", function(request, response){

let dataFromRequest = JSON.parse(request.body);
console.log("The front end send the follow: ", + request); 

response.sendStatus(200);
});