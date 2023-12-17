import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function customRequest(request: HttpRequest, context: InvocationContext, object, name: string): Promise<HttpResponseInit> 
    {
    context.log(`Function processed request for url "${request.url}. CorrelationId: ${context.invocationId}"`);

    const count = +request.query.get("count") || 10;

    context.log(`${count} objects requested. CorrelationId: ${context.invocationId}`)

    var array = [];

    for (var i = 0; i < count; i++) {
        array.push(new object());
    }
   
    return { body: JSON.stringify(array), headers: { "Content-Type": "application/json" } };
};
