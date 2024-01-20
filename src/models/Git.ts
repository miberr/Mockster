import { allFakers } from "@faker-js/faker";

export class Git {
    branch: string;
    commitDate: string;
    commitEntry: string;
    commitMessage: string;
    commitSha: string;

    constructor(locale: string) {
        const faker = allFakers[locale].git;

        this.branch = faker.branch();
        this.commitDate = faker.commitDate();
        this.commitEntry = faker.commitEntry();
        this.commitMessage = faker.commitMessage();
        this.commitSha = faker.commitSha();
    }
}