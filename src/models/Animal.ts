export class Animal {
    bear: string;
    bird: string;
    cat: string;
    cetacean: string;
    cow: string;
    crocodilia: string;
    dog: string;
    fish: string;
    horse: string;
    insect: string;
    lion: string;
    rabbit: string;
    rodent: string;
    snake: string;
    type: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.animal;
        this.bear = faker.bear();
        this.bird = faker.bird();
        this.cat = faker.cat();
        this.cetacean = faker.cetacean();
        this.cow = faker.cow();
        this.crocodilia = faker.crocodilia();
        this.dog = faker.dog();
        this.fish = faker.fish();
        this.horse = faker.horse();
        this.insect = faker.insect();
        this.lion = faker.lion();
        this.rabbit = faker.rabbit();
        this.rodent = faker.rodent();
        this.snake = faker.snake();
        this.type = faker.type();
    }
}