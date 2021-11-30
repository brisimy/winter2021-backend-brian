const Vehicle = require("./Vehicle.js")
class Car extends Vehicle {
    constructor(superData, subData) {
        super(superData);
        this.year = subData.year;
        this.wheels = subData.wheels;
        this.doors = subData.doors;
        this.vin = subData.vin;
        this.owner = subData.owner;
        this.engineHP = subData.engineHP;
        this.miles = subData.miles;
        this.lastMaintmiles = subData.lastMaintmiles;
        this.fuelType = subData.fuelType;
        this.fuelCapacity = subData.fuelCapacity;
        this.fuelCurrent = subData.fuelCurrent;
        this.mpg = subData.mpg;
        this.bodyType = subData.bodyType;
        this.gvwr = subData.gvwr;
    }

    run(miles) {
        let maxDistance = this.fuelCurrent * this.mpg;

        if (miles <= maxDistance) {
            this.fuelCurrent = this.fuelCurrent - (miles / this.mpg);
            console.log(`${this.make} ${this.model} has ${this.fuelCurrent} gallons left.`);
        } else {
            console.log(`${this.make} ${this.model} doesn't have enough fuel to go that far.`);
        }   
    }

refuel(gallons) {
    let tankFreeSpace = this.fuelCapacity - this.fuelCapacity;

    if(tankFreeSpace >= gallons) {
        this.fuelCapacity = this.fuelCurrent;
    }



}

checkMaintenance() {
    let milesSinceCheck = this.miles - this.lastMaintMiles;

    if(milesSinceCheck >= 10000) {
        console.log('The ${this.make} ${this.model} needs maintanence!')
    }
        else{
            console.log("No maintanance is needed at the moment")
        }
}

}

module.exports = Car;