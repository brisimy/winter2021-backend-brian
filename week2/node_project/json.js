const fs = require("fs");

let myObject = {
num1: 100,
welcomeString: "Goodmorning!",
isValid: true,
sayHello: function () {
    console.log("Hello");
    }
};

//If using Node.js, do not name any variables or function the name "name".
let employee = {
    fname: "Brian",
    age: 40,
};

let jsonResults = JSON.stringify(myObject);
console.log(jsonResults);

fs.writeFileSync("data.json",jsonResults,"utf-8");

let jsonText = fs.readFileSync("data.json", "utf-8")

let objectFromJSON = JSON.parse(jsonText);
console.log(objectFromJSON);