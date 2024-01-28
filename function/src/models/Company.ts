export class Company {
    buzzAdjective: string;
    buzzNoun: string;
    buzzPhrase: string;
    buzzVerb: string;
    catchPhrase: string;
    catchPhraseAdjective: string;
    catchPhraseDescriptor: string;
    catchPhraseNoun: string;
    city: string;
    country: string;
    creditLimit: number;
    email: string;
    mobilePhone: string;
    name: string;
    numberOfEmployees: number;
    phone: string;
    revenue: number;
    streetAddress: string;
    website: string;
    zipCode: string;

    constructor(localizedFaker) {
        const faker = localizedFaker;
        this.buzzAdjective = faker.company.buzzAdjective();
        this.buzzNoun = faker.company.buzzNoun();
        this.buzzPhrase = faker.company.buzzPhrase();
        this.buzzVerb = faker.company.buzzVerb();
        this.catchPhrase = faker.company.catchPhrase();
        this.catchPhraseAdjective = faker.company.catchPhraseAdjective();
        this.catchPhraseDescriptor = faker.company.catchPhraseDescriptor();
        this.catchPhraseNoun = faker.company.catchPhraseNoun();
        this.city = faker.location.city();
        this.country = faker.location.country();
        this.creditLimit = faker.number.int(100) * 1000000;
        this.email = faker.internet.email();
        this.mobilePhone = faker.phone.number();
        this.name = faker.company.name();
        this.numberOfEmployees = faker.number.int(10000);
        this.phone = faker.phone.number();
        this.revenue = faker.number.int(100) * 1000000;
        this.streetAddress = faker.location.streetAddress();
        this.website = faker.internet.url();
        this.zipCode = faker.location.zipCode();
    }
}