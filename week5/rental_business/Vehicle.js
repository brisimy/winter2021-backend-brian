
class Vehicle {
    constructor(data) {
        this.name = data.name;
        this.make = data.make;
        this.model = data.model;
        this.occupancy = data.occupancy;
        this.purchased = data.purchased;
        this.id = data.id;
        this.timestamp = new Date();
    } 
}
module.exports = Vehicle;
