import { SexType, faker } from "@faker-js/faker";

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
    sexType: SexType =  faker.person.sexType();
    firstName: string =  faker.person.firstName(this.sexType);
    lastName: string =  faker.person.lastName(this.sexType);
    bio: string =  faker.person.bio();
    birthday: Date =  faker.date.birthdate(); 
    businessPhone: string =  faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}'); // Complimentary to faker-person
    city: string =  faker.location.city(); // Complimentary to faker-person
    country: string =  faker.location.country(); // Complimentary to faker-person
    creditLimit: number =  faker.number.int(10000) * 1000; // Complimentary to faker-person
    department: string =  faker.helpers.arrayElement(departments); // Complimentary to faker-person
    description: string =  faker.person.bio(); // Complimentary to faker-person
    email: string =  faker.internet.email({firstName: this.firstName, lastName: this.lastName});
    fullName: string =  this.firstName + " " + this.lastName;
    gener: string =  faker.person.gender();
    jobArea: string =  faker.person.jobArea();
    jobDescriptor: string =  faker.person.jobDescriptor();
    jobTitle: string =  faker.person.jobTitle();
    jobType: string =  faker.person.jobType();
    prefix: string =  faker.person.prefix(this.sexType);
    mobilePhone: string =  faker.helpers.fromRegExp('+[1-9]{1,3} [0-9]{6,9}');
    salutation: string =  faker.person.prefix(this.sexType);
    streetAddress: string =  faker.location.streetAddress();
    suffix: string =  faker.helpers.maybe(() => faker.person.suffix(), {probability:  0.1}); // Complimentary implementation to faker-person with 10% change of field being populated 
    zipCode: string =  faker.location.zipCode(); // Complicated to faker-person
    zodiacSign: string =  faker.person.zodiacSign(); 
}
