export class Music {

    genre: string;
    songName: string;

    constructor(locslizedFaker) {
        const faker = locslizedFaker.music;

        this.genre = faker.genre();
        this.songName = faker.songName();
    }

}