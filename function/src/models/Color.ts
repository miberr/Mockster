export class Color {
    cmyk: number[];
    colorByCSSColorSpace: number[];
    cssSupportedFunction: string;
    cssSupportedSpace: string;
    hsl: number[];
    humanReadableColor: string;
    hwb: number[];
    lab: number[];
    lch: number[];
    rgb: string;
    colorSpace: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.color;
        this.cmyk = faker.cmyk();
        this.colorByCSSColorSpace = faker.colorByCSSColorSpace();
        this.cssSupportedFunction = faker.cssSupportedFunction();
        this.cssSupportedSpace = faker.cssSupportedSpace();
        this.hsl = faker.hsl();
        this.humanReadableColor = faker.human();
        this.hwb = faker.hwb();
        this.lab = faker.lab();
        this.lch = faker.lch();
        this.rgb = faker.rgb();
        this.colorSpace = faker.space();
    }
}