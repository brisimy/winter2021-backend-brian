const fs = require("fs");
const process = require("process");
const file = fs.readFileSync("Street_and_Sidewalk_Cleaningshort.csv", "utf-8");
let streetCleanObjects;
let dataArray = file.split("\n");
    //Remove space between column headers that had space
let firstLine = dataArray[0].replace(/\s/g, '');
let columnTitles = firstLine.split(",");
class CleanStreet {
    constructor(streetCleanData){
        if (streetCleanData === undefined || streetCleanData[0] === "" || streetCleanData.length === 0 ) {
            console.log("Cannot build Object, empty array provided.");
    } else {
        for (let i = 0; i < columnTitles.length; i++) {
            if (streetCleanData[i] === undefined) {
                console.log(`Undefined Detected for Clean array ID: ${i}`);
            }
                this[columnTitles[i]] = streetCleanData[i];
                }
        }
    }
}
    streetCleanObjects = [];
    for (let i = 1; i < dataArray.length; i++) {
        let lineArray = dataArray[i];
        let lineArrayFix = lineArray.split(",");
        const streetCleanObject = new CleanStreet(lineArrayFix);
        streetCleanObjects.push(streetCleanObject);
       
    }

    //Trying to remove double quotes that are messing up the address object
    for (let i = 1; i < dataArray.length; i++) {
        }
    streetCleanObjects.pop();
    
    //Which department has to respond to cleaning request more? 
    //What was the most common requests made? 

    //objectName.propertyName
