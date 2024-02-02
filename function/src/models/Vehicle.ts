export class Vehicle {
    bicycle: string;
    color: string;
    fuel: string;
    manufacturer: string;
    model: string;
    type: string;
    vehicle: string;
    vin: string;
    vrm: string;

    constructor(localizedFaker) {
        const faker = localizedFaker;
        this.bicycle = faker.vehicle.bicycle();
        this.color = faker.vehicle.color();
        this.fuel = faker.vehicle.fuel();
        this.manufacturer = faker.vehicle.manufacturer();
        this.model = faker.vehicle.model();
        this.type = faker.vehicle.type();
        this.vehicle = faker.vehicle.vehicle();
        this.vin = faker.vehicle.vin();
        this.vrm = faker.vehicle.vrm();
    }
}