export class Number {

    binary: string;
    float: number;
    hex: string;
    int: number;
    octal: string;

    constructor(localizedFake) {
        const faker = localizedFake.number;

        this.binary = faker.binary();
        this.float = faker.float();
        this.hex = faker.hex();
        this.int = faker.int();
        this.octal = faker.octal();
    }
}