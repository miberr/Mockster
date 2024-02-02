export class Lorem {
    lines: string;
    paragraph: string;
    paragraphs: string;
    sentence: string;
    sentences: string;
    slug: string;
    text: string;
    word: string;
    words: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.lorem;

        this.lines = faker.lines();
        this.paragraph = faker.paragraph();
        this.paragraphs = faker.paragraphs();
        this.sentence = faker.sentence();
        this.sentences = faker.sentences();
        this.slug = faker.slug();
        this.text = faker.text();
        this.word = faker.word();
        this.words = faker.words();
    }
}