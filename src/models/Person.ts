import { SexType, allFakers } from "@faker-js/faker";

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
    sexType: SexType;
    firstName: string;
    lastName: string;
    bio: string;
    birthday: string;
    businessPhone: string;
    city: string;
    country: string;
    creditLimit: number;
    department: string;
    description: string;
    email: string;
    fullName: string;
    gender: string;
    jobArea: string;

    constructor(location: string) {
        const faker = allFakers[location];
        this.sexType = faker.person.sexType();
        this.firstName = faker.person.firstName(this.sexType);
        this.lastName = faker.person.lastName(this.sexType);
        this.bio = faker.person.bio();
        this.birthday = faker.date.birthdate().toISOString();
        this.businessPhone = faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}');
        this.city = faker.location.city();
        this.country = faker.location.country();
        this.creditLimit = faker.number.int(10000) * 1000;
        this.department = faker.helpers.arrayElement(departments);
        this.description = faker.person.bio();
        this.email = faker.internet.email({firstName: this.firstName, lastName: this.lastName});
        this.fullName = this.firstName + " " + this.lastName;
        this.gender = faker.person.gender();
        this.jobArea = faker.person.jobArea();
    }
}