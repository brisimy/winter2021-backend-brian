const fs = require("fs");
const process = require("process");
//console.log(process.argv);
const path = require("path");
const file = fs.readFileSync(path.resolve(__dirname, "../file.txt"));
//const txtFile = fs.readFileSync("./file.txt", "utf-8");
//const txtFile = fs.readFileSync("essay.txt", "utf-8");
//console.log(txtFile)
let txtFileArray = txtFile.split(' ');
//console.log(txtFileArray[0]);
let numberOfWords = txtFileArray.length;
//console.log(numberOfWords);
console.log('The file "example.txt" has '  +numberOfWords+ ' words.')

