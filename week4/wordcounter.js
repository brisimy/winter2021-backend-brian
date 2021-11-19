const fs = require("fs");
const process = require("process");
//console.log(process.argv);
const txtFile = fs.readFileSync("example.txt", "utf-8");
//console.log(txtFile)
let txtFileArray = txtFile.split(' ');
//console.log(txtFileArray[0]);
let numberOfWords = txtFileArray.length;
//console.log(numberOfWords);
console.log('The file "example.txt" has '  +numberOfWords+ ' words.')

