export class Hacker {
    abbreviation: string;
    adjective: string;
    ingverb: string;
    noun: string;
    phrase: string;
    verb: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.hacker;
        
        this.abbreviation = faker.abbreviation();
        this.adjective = faker.adjective();
        this.ingverb = faker.ingverb();
        this.noun = faker.noun();
        this.phrase = faker.phrase();
        this.verb = faker.verb();
    }
}