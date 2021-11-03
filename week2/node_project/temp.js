/*
If the user doesn't type anthing after temp.js, provide a message on how to use the script. 

Take in two values from the terminal, A number, and the test "toF" or "toC"

Test the number to make sure we can convert it to Javascript Number datatype. 

Check if the second argument is the value of "toF" or "toC". If they did, run the appropriate math equation to convert the number. Display the results in the terminal. If not "toF" or "toC", show an error message that also describes both options. 

*/

let arguments = process.argv;
console.log(arguments[2]);

if (arguments[2] === undefined) {
    console.log("Welcome to the temperture converter. After 'node temp.js' type in your temperture number,  and afterwards type in either 'toF' to convert from Celcius to Fahrenheit or 'toC' from Fahrenheit to Celcius.");

    console.log("Example");
    console.log("node temp.js 72 toC")
}

let number = parseFloat(argument[2]);

if (Number.isNaN(number)){
    console.log("The number you provided is not a valid! Ise characters  0 to 9 only. Decemial values are okay")
} else {
  if (argument[3] ==="toC")  {
      let resultsC = (number - 32) * (5/9)

      console.log("The temperature " + number + F in Celcius " + results/ctoFixed(1) + )
  } 
}
