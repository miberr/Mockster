import { faker } from "@faker-js/faker";

export class Airline {
    aircraftType: string = faker.airline.aircraftType();
    airline: object = faker.airline.airline();
    airplane: object = faker.airline.airplane();
    airport: object = faker.airline.airport();
    departureAirport: object = faker.airline.airport();
    arrivalAirport: object = faker.airline.airport();
    flightNumber: string = faker.airline.flightNumber();
    recordLocator: string = faker.airline.recordLocator();
    seat: string = faker.airline.seat();
}
