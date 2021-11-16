// Use the Express package. Call and run Express.
const express = require("express");

// Use the body-parser package. Is not used. Depercated. bodyParser is dimmed. Is access thru express. 
const bodyParser = require("body-parser");

// Creates an Express object from the Express package.
const app = express();

// Allow Express to use the HTTP module of Node. 
const http = require("http").Server(app);

// Necessary settings for body-parser, which automatically detects and converts JSON in our HTTP requests.
app.use (express.json({strict:false}));
app.use (express.urlencoded({extended:true}));

// Assign a variable to Port. Likely will use 3000 for us. 
const port = 3000;

// Tells Express/HTTP what port to listen to.
http.listen(port); //Common Development Ports: 8080, 3000 = Node. // 80 is the production port. 

console.log("Express server is running on port " + port + ".");

//Express Routes. Allow us to "redirect" a URL filepath to a specific folder. 
app.use("/" , express.static("public_html/"));

// This .post() method handles any POST requests made by the /test filepath. When a request is made, run the callback function.
app.post("/test", function(request, response){
    // Data from the front end is located inside of request.body.

    // The following code runs when a request is made.
    console.log("The front end sends the following: ", request.body);

    //Send this variable to the front-end
    let myResponseObject = {

        response: "Heard you loud and clear!"
    }

// We send a response to the front-end client with a Status Code of 200 (which means OK). Cannot send status code and data. Update 
response.send(myResponseObject);
});