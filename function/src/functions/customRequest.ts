import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { validLocales } from "./helpers";
import { allFakers, simpleFaker } from "@faker-js/faker";

export async function customRequest(request: HttpRequest, context: InvocationContext, object): Promise<HttpResponseInit> 
    {
    // Log request url and correlationId
    context.log(`Function processed request for url "${request.url}. CorrelationId: ${context.invocationId}"`);

    // If locale is specified and is not a valid locale, return 400
    if (request.query.get("locale") && !validLocales.includes(request.query.get("locale"))) {

        context.log(`Locale provided is not valid. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid locale parameter. Must be one of: ' + validLocales.join(', ') })
        };
    }

    const locale = request.query.get("locale") || "en";

    // If count is specified and is not a number, return 400
    if (request.query.get("count") && (isNaN(+request.query.get("count")) || +request.query.get("count") < 0 || !Number.isInteger(+request.query.get("count")))) {

        context.log(`Count provided is not a valid positive number. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid count parameter. Must be a positive whole number.' })
        };
    }

    // If no count is specified, return 10 objects
    const count = +request.query.get("count") || 10;

    // If count is specified and is not a number, return 400
    if (request.query.get("seed") && (isNaN(+request.query.get("seed")) || +request.query.get("seed") < 0 || !Number.isInteger(+request.query.get("seed")))) {

        context.log(`Seed provided is not a valid positive number. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid seed parameter. Must be a positive whole number.' })
        };
    }

    // If no count is specified, return 10 objects
    const seed = +request.query.get("seed") || simpleFaker.number.int({min: 1, max: 999999});

    // Log number of objects requested and correlationId
    context.log(`${count} objects requested. CorrelationId: ${context.invocationId}`)

    var array = [];

    // Init faker with locale and seed
    var faker = allFakers[locale];
    faker.seed(+seed);

    // Create array of objects with count number of objects
    for (var i = 0; i < count; i++) {
        array.push(new object(faker));
    }
   
    return { 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(array) 
    };
};
