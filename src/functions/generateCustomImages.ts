import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { faker, simpleFaker } from "@faker-js/faker";

export async function generateCustomImages(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> 
    {
    // Log request url and correlationId
    context.log(`Function processed request for url "${request.url}. CorrelationId: ${context.invocationId}"`);
   

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

    // If width is specified and is not a number, return 400
    if (request.query.get("width") && isNaN(+request.query.get("width"))) {

        context.log(`Width provided is not a number. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid width parameter. Must be a number.' })
        };
    }

    const width: number = +request.query.get("width") || 640;

    // If height is specified and is not a number, return 400
    if (request.query.get("height") && isNaN(+request.query.get("height"))) {

        context.log(`Height provided is not a number. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid height parameter. Must be a number.' })
        };
    }

    const height: number = +request.query.get("height") || 480;

    // If type is set and not a valid category, return 400
    const validCategories = ['abstract', 'animals', 'business', 'cats', 'city', 'fashion', 'food', 'nature', 'nightlife', 'people', 'sports', 'technics', 'transport'];

    if (request.query.get("category") && !validCategories.includes(request.query.get("category"))) {

        context.log(`Category provided is not not in valid categories. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: `Invalid category. Type must be one of the following: ${validCategories.join(', ')}.` })
        };
    }

    const category =  request.query.get("category") || 'random';

    // If seed is specified and is not a number, return 400
    if (request.query.get("seed") && (isNaN(+request.query.get("seed")) || +request.query.get("seed") < 0 || !Number.isInteger(+request.query.get("seed")))) {

        context.log(`Seed provided is not a valid positive number. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid seed parameter. Must be a positive whole number.' })
        };
    }

    // If no seed is specified, rgenerate a random seed
    const seed = +request.query.get("seed") || simpleFaker.number.int({min: 1, max: 999999});

    var images = [];

    faker.seed(+seed);

    // Create array of objects with count number of objects
    for (var i = 0; i < count; i++) {
        images.push(
            {
                name: category + '_' + (i + 1) + '.jpg',
                url: faker.image.urlLoremFlickr({
                    width: width, 
                    height: height, 
                    category: category
                })
            }
        );
    }
   
    
   
    return { body: JSON.stringify(images), headers: { "Content-Type": "application/json" } };
};
