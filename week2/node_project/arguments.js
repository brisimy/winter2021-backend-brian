//Node.js Accepting Arguments.

const { bindAll } = require("lodash");

//Node.js Arguments global variable. It holds an ARRAY of pieces of text from FROM the command line (Terminal or Git Bash)

//console.log(process.argv);

let number1 = parseInt(process.argv[2]);

let number2 = process.argv[3];
number2 = parseInt(number2)


if(Number.isNaN(number1)) || (Number.isNaN(number2)); {
    console.log("Sorry but the value you provide is not a valid number.");

    else {
        let sentence = "The sum of " + number1 + " and " +number2 + " is " + (number1 + number2) + ".";
    
    let sum = number1 + number2;
    console.log(sentence);
    }
}



//let number1 = 15;
//let number2 = 25;
//console.log(number1 + number2)


