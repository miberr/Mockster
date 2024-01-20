import { allFakers } from "@faker-js/faker";

export class Internet {
    avatar: string;
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
    userName: string;

    constructor(locale: string) {
        const faker = allFakers[locale].internet;
        this.avatar = faker.avatar();
        this.color = faker.color();
        this.displayName = faker.displayName();
        this.domainName = faker.domainName();
        this.domainSuffix = faker.domainSuffix();
        this.domainWord = faker.domainWord();
        this.email = faker.email();
        this.emoji = faker.emoji();
        this.exampleEmail = faker.exampleEmail();
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
        this.userName = faker.userName();
    }
}