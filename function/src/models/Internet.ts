import { allFakers } from "@faker-js/faker";

export class Internet {
    color: string;
    displayName: string;
    domainName: string;
    domainSuffix: string;
    domainWord: string;
    email: string;
    emoji: string;
    exampleEmail: string;
    httpMethod: string;
    httpStatusCode: number;
    ip: string;
    ipv4: string;
    ipv6: string;
    mac: string;
    password: string;
    port: number;
    protocol: string;
    url: string;
    userAgent: string;
    username: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.internet;
        const firstName = localizedFaker.person.firstName();
        const lastName = localizedFaker.person.lastName();

        this.color = faker.color();
        this.displayName = faker.displayName({firstName: firstName, lastName: lastName});
        this.domainName = faker.domainName();
        this.domainSuffix = faker.domainSuffix();
        this.domainWord = faker.domainWord();
        this.email = faker.email({firstName: firstName, lastName: lastName});
        this.emoji = faker.emoji();
        this.exampleEmail = faker.exampleEmail({firstName: firstName, lastName: lastName});
        this.httpMethod = faker.httpMethod();
        this.httpStatusCode = faker.httpStatusCode();
        this.ip = faker.ip();
        this.ipv4 = faker.ipv4();
        this.ipv6 = faker.ipv6();
        this.mac = faker.mac();
        this.password = faker.password();
        this.port = faker.port();
        this.protocol = faker.protocol();
        this.url = faker.url();
        this.userAgent = faker.userAgent();
        this.username = faker.userName({firstName: firstName, lastName: lastName});
    }
}