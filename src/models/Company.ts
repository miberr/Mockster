import { faker } from "@faker-js/faker";

export class Company {
    buzzAdjective: string =  faker.company.buzzAdjective();
    buzzNoun: string =  faker.company.buzzNoun();
    buzzPhrase: string =  faker.company.buzzPhrase();
    buzzVerb: string =  faker.company.buzzVerb();
    catchPhrase: string =  faker.company.catchPhrase();
    catchPhraseAdjective: string =  faker.company.catchPhraseAdjective();
    catchPhraseDescriptor: string =  faker.company.catchPhraseDescriptor();
    catchPhraseNoun: string =  faker.company.catchPhraseNoun();
    city: string =  faker.location.city(); // Complimentary to faker-company
    country: string =  faker.location.country(); // Complimentary to faker-company
    creditLimit: number =  faker.number.int(10000) * 1000000; // Complimentary to faker-company
    email: string =  faker.internet.email(); // Complimentary to faker-company
    mobilePhone: string =  faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}'); // Complimentary to faker-company
    name: string =  faker.company.name();
    numberOfEmployees: number =  faker.number.int(10000);// Complimentary to faker-company
    phone: string =  faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}'); // Complimentary to faker-company
    revenue: number =  faker.number.int(10000) * 1000000; // Complimentary to faker-company
    streetAddress: string =  faker.location.streetAddress(); // Complimentary to faker-company
    website: string =  faker.internet.url(); // Complimentary to faker-company
    zipCode: string =  faker.location.zipCode(); // Complimentary to faker-company
}
