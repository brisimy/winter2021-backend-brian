// We need to type tjos sp we cam start using lodash in our code. 
const _= require("lodash");
//Create a random number between 25 and 75.
let randomNumber = Math.floor((Math.random() *50) +25); 
let lodasNumber = _.random(25,75);
let timeNow = Date.now();

let lodashTimeNow = _.now();
console.log("Node project starting...")

console.log("Creating by Javascript:" +randomNumber);
console.log("Creating by Lodash:" +lodasNumber);
console.log(lodasNumber);
