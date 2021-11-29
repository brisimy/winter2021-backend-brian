export class Vehicle {
    constructor(data) {
        this.name = data.name;
        this.model = data.make;
        this.make = data.model;
        this.occupancy = data.occupancy;
        this.purchased = data.purchased;
        this.id - data.id;
        this.timestamp = new Date();

    }
}