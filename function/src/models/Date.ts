export class Date {
    anytime: string;
    birthdate: string;
    future: string;
    month: string;
    past: string;
    recent: string;
    soon: string;
    weekday: string;
    year: number;

    constructor(localizedFaker) {
        const faker = localizedFaker.date;
        this.anytime = faker.anytime().toISOString();
        this.birthdate = faker.birthdate().toISOString();
        this.future = faker.future().toISOString();
        this.month = faker.month();
        this.past = faker.past().toISOString();
        this.recent = faker.recent({days: 5}).toISOString();
        this.soon = faker.soon({days: 5}).toISOString();
        this.weekday = faker.weekday();
        this.year = localizedFaker.number.int({ min: 1900, max: 2100 });
    }
}