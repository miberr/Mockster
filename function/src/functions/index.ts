import { app } from "@azure/functions";

import { Airline } from "../models/Airline";
import { Animal } from "../models/Animal";
import { Color } from "../models/Color";
import { Company } from "../models/Company";
import { Database } from "../models/Database";
import { Date } from "../models/Date";
import { Finance } from "../models/Finance";
import { Git } from "../models/Git";
import { Hacker } from "../models/Hacker";
import { Internet } from "../models/Internet";  
import { Location } from "../models/Location";
import { Lorem } from "../models/Lorem";
import { Music } from "../models/Music";
import { Number } from "../models/Number";
import { Person } from "../models/Person";
import { Phone } from "../models/Phone";
import { Product } from "../models/Product";
import { Science } from "../models/Science";
import { String } from "../models/String";
import { System } from "../models/System";
import { Vehicle } from "../models/Vehicle";
import { Word } from "../models/Word";

import { customRequest } from "./customRequest";
import { generateCustomImages } from "./generateCustomImages";

app.http('airlines', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Airline)
});

app.http('animals', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Animal)
});

app.http('colors', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Color)
});

app.http('companies', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Company)
});

app.http('databases', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Database)
});

app.http('dates', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Date)
});

app.http('finances', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Finance)
});

app.http('gits', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Git)

});

app.http('hackers', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Hacker)
});

app.http('images', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: generateCustomImages
})

app.http('internets', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Internet)
});

app.http('locations', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Location)
});

app.http('lorems', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Lorem)
});

app.http('musics', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Music)
});

app.http('numbers', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Number)
});

app.http('persons', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Person)
});

app.http('phones', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Phone)
});

app.http('products', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Product)
});

app.http('sciences', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Science)
});

app.http('strings', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, String)
});

app.http('systems', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, System)
});

app.http('vehicles', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Vehicle)
});

app.http('words', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: (request, context) => customRequest(request, context, Word)
});