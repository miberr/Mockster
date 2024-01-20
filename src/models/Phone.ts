import { allFakers } from "@faker-js/faker";

export class Phone {

    imei: string;
    number: string;

    constructor(locale: string) {
        const faker = allFakers[locale];

        this.imei = faker.phone.imei();
        this.number = faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}');
    }
}