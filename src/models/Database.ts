import { faker } from "@faker-js/faker";

export class Database {
    collation: string = faker.database.collation();
    column: string = faker.database.column();
    engine: string = faker.database.engine();
    mongodbObjectId: string = faker.database.mongodbObjectId();
    type: string = faker.database.type();
}
