export class Airline {
    aircraftType: string;
    airlineName: string;
    airlineCode: string;
    airplaneName: string;
    airplaneTypeCode: string;
    departureAirportName: string;
    departureAirportCode: string;
    arrivalAirportName: string;
    arrivalAirportCode: string;
    flightNumber: string;
    recordLocator: string;
    seat: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.airline;
        const aircraftType = faker.aircraftType();
        const airline = faker.airline();
        const airplane = faker.airplane();
        const departureAirport = faker.airport();
        const arrivalAirport = faker.airport();

        this.aircraftType = aircraftType;
        this.airlineName = airline.name;
        this.airlineCode = airline.iataCode;
        this.airplaneName = airplane.name;
        this.airplaneTypeCode = airplane.iataTypeCode;
        this.departureAirportName = departureAirport.name;
        this.departureAirportCode = departureAirport.iataCode;
        this.arrivalAirportName = arrivalAirport.name;
        this.arrivalAirportCode = arrivalAirport.iataCode;
        this.flightNumber = airline.iataCode + faker.flightNumber({ addLeadingZeros: true });
        this.recordLocator = faker.recordLocator();
        this.seat = faker.seat(aircraftType);
    }
}