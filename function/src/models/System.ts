export class System {
    commonFileExt: string;
    commonFileName: string;
    commonFileType: string;
    cron: string;
    directoryPath: string;
    fileExt: string;
    fileName: string;
    filePath: string;
    fileType: string;
    mimeType: string;
    networkInterface: string;
    semver: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.system;

        this.commonFileExt = faker.commonFileExt();
        this.commonFileName = faker.commonFileName();
        this.commonFileType = faker.commonFileType();
        this.cron = faker.cron();
        this.directoryPath = faker.directoryPath();
        this.fileExt = faker.fileExt();
        this.fileName = faker.fileName();
        this.filePath = faker.filePath();
        this.fileType = faker.fileType();
        this.mimeType = faker.mimeType();
        this.networkInterface = faker.networkInterface();
        this.semver = faker.semver();
    }
}