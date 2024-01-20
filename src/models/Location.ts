import { allFakers } from "@faker-js/faker";

export class Location {
    buildingNumber: string;
    cardinalDirection: string;
    city: string;
    country: string;
    countryCode: string;
    county: string;
    direction: string;
    latitude: number;
    longitude: number;
    ordinalDirection: string;
    secondaryAddress: string;
    state: string;
    street: string;
    streetAddress: string;
    timeZone: string;
    zipCode: string;

    constructor(locale: string) {
        const faker = allFakers[locale].location;
        const GPSCoordinates = faker.nearbyGPSCoordinate();
        
        this.buildingNumber = faker.buildingNumber();
        this.cardinalDirection = faker.cardinalDirection();
        this.city = faker.city();
        this.country = faker.country();
        this.countryCode = faker.countryCode();
        this.county = faker.county();
        this.direction = faker.direction();
        this.latitude = faker.latitude();
        this.longitude = faker.longitude();
        this.ordinalDirection = faker.ordinalDirection();
        this.secondaryAddress = faker.secondaryAddress();
        this.state = faker.state();
        this.street = faker.street();
        this.streetAddress = faker.streetAddress();
        this.timeZone = faker.timeZone();
        this.zipCode = faker.zipCode();
    }
}