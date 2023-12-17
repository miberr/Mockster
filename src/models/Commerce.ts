import { faker } from "@faker-js/faker";

export class Commerce {
    department: string = faker.commerce.department();
    isbn: string = faker.commerce.isbn();
    price: string = faker.commerce.price();
    product: string = faker.commerce.product();
    productAdjective: string = faker.commerce.productAdjective();
    productDescription: string = faker.commerce.productDescription();
    productMaterial: string = faker.commerce.productMaterial();
    productName: string = faker.commerce.productName();
}
