export class Word {
    adjective: string;
    adverb: string;
    conjunction: string;
    interjection: string;
    noun: string;
    preposition: string;
    sample: string;
    verb: string;
    words: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.word;

        this.adjective = faker.adjective();
        this.adverb = faker.adverb();
        this.conjunction = faker.conjunction();
        this.interjection = faker.interjection();
        this.noun = faker.noun();
        this.preposition = faker.preposition();
        this.sample = faker.sample();
        this.verb = faker.verb();
        this.words = faker.words();
    }
}