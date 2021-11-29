import {Vehicle} from "./Vehicle.js";

class Car extends Vehicle {
    constructor(SuperData) {
        super(superData);
        this.year = subData.year;
        this.wheels = subData.wheels  ;
        this.doors = subData.doors;
        this.vin = subData.vin;
        this.owner = subData.owner;
        this.engineHP = subData.engineHP;
        this.fuelType = subData.fuelType; 
        this.fuelCapacity = subData.fuelCapacity ;
        this.fuelCurrent = subData.fuelCurrent;
        this.mpg = subData.mpg; 
        this.bodyType = subData.bodyType;
        this.gvwr = subData.gvwr;
        

    }
}

let honda = new Car({
    name: "Honda",
    make: "Honda",
    model: "Accord",
    occupancy: 5,
    purchased: new Date("06/25/2020"),


}, {
    year:201,
    wheels: 4,
    doors: 4,
    vin: "00243245234rsdfa",
    engineHP:300,
    fuelType: 21,
    fuelCurrent: 10,
    mpg: 14,
    bodyType: "sedan",
    gvwr: 4575,


}



);