export class Science {

    chemicalElementSymbol: string;
    chemicalElementName: string;
    chemicalElementAtomicNumber: number;
    unitName: string;
    unitSymbol: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.science;
        const chemicalElement = faker.chemicalElement();
        const unit = faker.unit();

        this.chemicalElementSymbol = chemicalElement.symbol;
        this.chemicalElementName = chemicalElement.name;
        this.chemicalElementAtomicNumber = chemicalElement.atomicNumber;
        this.unitName = unit.name;
        this.unitSymbol = unit.symbol;
    }
}
