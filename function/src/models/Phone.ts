export class Phone {

    imei: string;
    number: string;

    constructor(localizedFaker) {
        const faker = localizedFaker;

        this.imei = faker.phone.imei();
        this.number = faker.phone.number();
    }
}