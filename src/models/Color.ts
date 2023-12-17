import { faker } from "@faker-js/faker";

export class Color {
    cmyk: number[] = faker.color.cmyk();
    colorByCSSColorSpace: number[] =  faker.color.colorByCSSColorSpace();
    cssSupportedFunction: string =  faker.color.cssSupportedFunction();
    cssSupportedSpace: string =  faker.color.cssSupportedSpace();
    hsl: number[] =  faker.color.hsl();
    human: string =  faker.color.human();
    hwb: number[] =  faker.color.hwb();
    lab: number[] =  faker.color.lab();
    lch: number[] =  faker.color.lch();
    rgb: string =  faker.color.rgb();
    space: string =  faker.color.space()
}
