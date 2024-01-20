import { allFakers } from "@faker-js/faker";

export class Science {

    chemicalElementSymbol: string;
    chemicalElementName: string;
    chemicalElementAtomicNumber: number;
    unitName: string;
    unitSymbol: string;

    constructor(locale: string) {
        const faker = allFakers[locale].science;
        const chemicalElement = faker.chemicalElement();
        const unit = faker.unit();

        this.chemicalElementSymbol = chemicalElement.symbol;
        this.chemicalElementName = chemicalElement.name;
        this.chemicalElementAtomicNumber = chemicalElement.atomicNumber;
        this.unitName = unit.name;
        this.unitSymbol = unit.symbol;
    }
}
