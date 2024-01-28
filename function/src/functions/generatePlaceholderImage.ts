import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { allFakers } from "@faker-js/faker";
import { validLocales } from "./helpers";

export async function generatePlaceholderImage(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> 
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

    // If color is not a valid hex color, return 400
    if (!/^#[0-9A-F]{3,6}$/i.test(request.query.get("color"))) {

        context.log(`Color provided is not a valid hex color. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid color. Color must be a hexadecimal color code.' })
        };
    }

    const color: string = request.query.get("color") || "#CCCCCC";

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

    // If type is set and a valid type, return 400
    const validTypes = ['svg-base64', 'svg-uri'];

    if (request.query.get("type") && !validTypes.includes(request.query.get("type"))) {

        context.log(`Type provided is not not in valid types. CorrelationId: ${context.invocationId}"`);

        return { 
            status: 400, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: 'Invalid type. Type must be "svg-base64" or "svg-uri".' })
        };
    }
    const type =  request.query.get("type") as 'svg-base64' | 'svg-uri' || 'svg-base64';

    var faker = allFakers[locale];
    var image = faker.image.dataUri({
        width: width, 
        height: height, 
        color: color, 
        type: type
    });
   
    
   
    return { body: JSON.stringify(image), headers: { "Content-Type": "application/json" } };
};
