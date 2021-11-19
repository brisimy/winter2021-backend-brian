let myFirstEmployee = {
    firstName: "Brian",
    position: "Student",
    age: 40
}; 

let myThirdEmployee = {
    firstName: "Sarah",
    position: "CEO",

}
class Employee {
    constructor(firstName,position,age){
    
        if(firstName === undefined){
            this.firstName ="MISSING NAME";
        } else {
            firstName.firstName
        }
        this.position = position;
        this.age = age;
        this.energy = 100;
    }
sayHello() {
    console.log("Hello there, my name is " + this.firstName);
}

work(hours) {
    this.energy = this.energy - (hours * 10);
    console.log(this.firstName + " works for " + hours + " hours")
}

goHome() {
    this.energy = 100;
    console.log(this.firstName + " goes home for the day.");
}

letPosition(newPosition) {
    if (newPostiion == undefined) 
}

}

let mySecondEmployee = new Employee("Joe", "Project Manager", 25);
let myFourthEmployee = new Employee("Mike", "HR Manager", 32);
let mynewEmployee = new Employee();

//saveEmployee(new Employee("Jane", "Operations", 41));

mySecondEmployee.sayHello();
myFourthEmployee.sayHello();

mySecondEmployee.work(4);
myFourthEmployee.work(1);

console.log(myFirstEmployee)
console.log(mySecondEmployee)
console.log(myFourthEmployee)
console.log(mynewEmployee)

function myFunction(number){

}
myFunction(100);

mySecondEmployee.postion = "General Project";

mySecondEmployee.setPosition()