import { app } from "@azure/functions";

import { Airline } from "../models/Airline";
import { Animal } from "../models/Animal";
import { Color } from "../models/Color";
import { Commerce } from "../models/Commerce";
import { Company } from "../models/Company";
import { Database } from "../models/Database";
import { Person } from "../models/Person";

import { customRequest } from "./request";

app.http('airlines', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Airline, "Airlines")
});

app.http('animals', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Animal, "Animals")
});

app.http('colors', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Color, "Colors")
});

app.http('commerces', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Commerce, "Commerces")
});

app.http('companies', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Company, "Companies")
});

app.http('databases', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Database, "Databases")
});

app.http('persons', { 
    methods: ['GET'],
    authLevel: 'anonymous', 
    handler: (request, context) => customRequest(request, context, Person, "Persons")
});