export class Database {
    collation: string;
    column: string;
    engine: string;
    mongodbObjectId: string;
    type: string;

    constructor(localizedFarker) {
        const faker = localizedFarker.database;
        this.collation = faker.collation();
        this.column = faker.column();
        this.engine = faker.engine();
        this.mongodbObjectId = faker.mongodbObjectId();
        this.type = faker.type();
    }
}