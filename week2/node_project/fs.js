// This tells node we would like to use FS package in this Javascript file.
const fs = require("fs");

//First method we will look at is .writefileSync() Write a file to the same folder as this Javascript file. Arguments: File name, File Content, Character Set


//Sychronous Javascript. Meaning this line will "block" any following code. That means the code after this will Not run until this line is done. 
fs.writeFileSync("test.txt", "Hello World", "utf-8");

fs.writeFileSync("veryimportantinfo.txt", "Password: 123456", "utf-8");

//Asynchonous Javascript. This line runs, but also move on to the code afterwards, and this end independent from the lines of code after it. 
//fs.writeFile()

// .readFileSync() Reads a file, and returns the contents of the file as a string. Arguments: File name, Character Set. 

let fileContents = fs.readFileSync("veryimportantinfo.txt", "utf-8");

//console.log(fileContents);

let time = new Date();

fileContents = fileContents + "\n" + time.toLocaleString("en-US");

fs.writeFileSync("veryimportantinfo.txt", fileContents, "utf-8");