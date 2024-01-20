import { allFakers } from "@faker-js/faker";

export class Music {

    genre: string;
    songName: string;

    constructor(locale: string) {
        const faker = allFakers[locale].music;

        this.genre = faker.genre();
        this.songName = faker.songName();
    }

}