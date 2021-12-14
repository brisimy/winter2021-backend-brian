const fs = require("fs");
const process = require("process");
const path = require("path");
const file = fs.readAsText(path.resolve(__dirname, "../file.csv"));
let cleaningObjects;
    
    // Read file and load ALL it's contents into data as string datatype.
    let data = (file, "utf-8");

    // Splits the data string, by each new line (\n)
    let dataArray = data.split("\n");

    let firstLine = dataArray[0];

    // Splits the first list by commas.
    let columnTitles = firstLine.split(",");

    