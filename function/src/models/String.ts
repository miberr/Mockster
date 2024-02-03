export class String {
    alpha: string;
    alphaNumeric: string;
    binary: string;
    hexadecimal: string;
    nanoid: string;
    numeric: string;
    octal: string;
    sample: string;
    symbol: string;
    uuid: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.string;

        this.alpha = faker.alpha();
        this.alphaNumeric = faker.alphanumeric();
        this.binary = faker.binary();
        this.hexadecimal = faker.hexadecimal();
        this.nanoid = faker.nanoid();
        this.numeric = faker.numeric();
        this.octal = faker.octal();
        this.sample = faker.sample();
        this.symbol = faker.symbol();
        this.uuid = faker.uuid();
    }
}