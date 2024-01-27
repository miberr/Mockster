export class Finance {
    accountName: string;
    accountNumber: string;
    amount: number;
    bic: string;
    bitcoinAddress: string;
    creditCardCVV: number;
    creditCardIssuer: string;
    creditCardNumber: string;
    currencyCode: string;
    currencyName: string;
    currencySymbol: string;
    ethereumAddress: string;
    iban: string;
    litecoinAddress: string;
    maskedNumber: string;
    pin: string;
    routingNumber: string;
    transactionDescription: string;
    transactionType: string;

    constructor(localizedFaker) {
        const faker = localizedFaker.finance;
        const currency = faker.currency();
        const creditCardIssuer = faker.creditCardIssuer();

        this.accountName = faker.accountName();
        this.accountNumber = faker.accountNumber();
        this.amount = Number(faker.amount());
        this.bic = faker.bic();
        this.bitcoinAddress = faker.bitcoinAddress();
        this.creditCardCVV = faker.creditCardCVV();
        this.creditCardIssuer = creditCardIssuer;
        this.creditCardNumber = faker.creditCardNumber({issuer: creditCardIssuer});
        this.currencyCode = currency.code;
        this.currencyName = currency.name
        this.currencySymbol = currency.symbol;
        this.ethereumAddress = faker.ethereumAddress();
        this.iban = faker.iban();
        this.litecoinAddress = faker.litecoinAddress();
        this.maskedNumber = faker.maskedNumber();
        this.pin = faker.pin();
        this.routingNumber = faker.routingNumber();
        this.transactionDescription = faker.transactionDescription();
        this.transactionType = faker.transactionType();
    }
}