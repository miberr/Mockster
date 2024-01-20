import { allFakers } from "@faker-js/faker";

// Implements Facker Commerce model
// named as Product for clarity
export class Product {
    department: string;
    isbn: string;
    price: number;
    product: string;
    productAdjective: string;
    productDescription: string;
    productMaterial: string;
    productName: string;

    constructor(locale: string) {
        const faker = allFakers[locale].commerce;
        this.department = faker.department();
        this.isbn = faker.isbn();
        this.price = Number(faker.price());
        this.product = faker.product();
        this.productAdjective = faker.productAdjective();
        this.productDescription = faker.productDescription();
        this.productMaterial = faker.productMaterial();
        this.productName = faker.productName();
    }
}