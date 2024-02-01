import { SexType } from "@faker-js/faker";

const departments = [
    "Accounting",
    "Human Resources",
    "Marketing",
    "Sales",
    "Customer Service",
    "Research and Development",
    "Production",
    "IT Services",
    "Legal",
    "Finance",
    "Purchasing",
    "Quality Assurance"
]

export class Person {
    bio: string;
    birthday: string;
    businessPhone: string;
    city: string;
    country: string;
    creditLimit: number;
    department: string;
    description: string;
    email: string;
    firstName: string;
    fullName: string;
    gender: string;
    jobArea: string;
    lastName: string;
    sexType: SexType;

    constructor(localizedFaker) {
        const faker = localizedFaker;
        const sexType = faker.person.sexType();
        const firstName = faker.person.firstName(sexType);
        const lastName = faker.person.lastName(sexType);
        this.bio = faker.person.bio();
        this.birthday = faker.date.birthdate().toISOString();
        this.businessPhone = faker.phone.number();
        this.city = faker.location.city();
        this.country = faker.location.country();
        this.creditLimit = faker.number.int(10000) * 1000;
        this.department = faker.helpers.arrayElement(departments);
        this.description = faker.person.bio();
        this.email = faker.internet.email({firstName: firstName, lastName: lastName});
        this.firstName = firstName;
        this.fullName = this.firstName + " " + this.lastName;
        this.gender = faker.person.gender();
        this.jobArea = faker.person.jobArea();
        this.lastName = lastName;
        this.sexType = sexType;
    }
}