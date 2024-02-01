
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('companies');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('companies');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('buzzAdjective');
  expect(responseJson[0]).toHaveProperty('buzzNoun');
  expect(responseJson[0]).toHaveProperty('buzzPhrase');
  expect(responseJson[0]).toHaveProperty('buzzVerb');
  expect(responseJson[0]).toHaveProperty('catchPhrase');
  expect(responseJson[0]).toHaveProperty('catchPhraseAdjective');
  expect(responseJson[0]).toHaveProperty('catchPhraseDescriptor');
  expect(responseJson[0]).toHaveProperty('catchPhraseNoun');
  expect(responseJson[0]).toHaveProperty('city');
  expect(responseJson[0]).toHaveProperty('country');
  expect(responseJson[0]).toHaveProperty('creditLimit');
  expect(responseJson[0]).toHaveProperty('email');
  expect(responseJson[0]).toHaveProperty('mobilePhone');
  expect(responseJson[0]).toHaveProperty('name');
  expect(responseJson[0]).toHaveProperty('numberOfEmployees');
  expect(responseJson[0]).toHaveProperty('phone');
  expect(responseJson[0]).toHaveProperty('revenue');
  expect(responseJson[0]).toHaveProperty('streetAddress');
  expect(responseJson[0]).toHaveProperty('website');
  expect(responseJson[0]).toHaveProperty('zipCode');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('companies');
  const responseJson = await response.json();
  
  expect(typeof responseJson[0].buzzAdjective).toBe('string');
  expect(typeof responseJson[0].buzzNoun).toBe('string');
  expect(typeof responseJson[0].buzzPhrase).toBe('string');
  expect(typeof responseJson[0].buzzVerb).toBe('string');
  expect(typeof responseJson[0].catchPhrase).toBe('string');
  expect(typeof responseJson[0].catchPhraseAdjective).toBe('string');
  expect(typeof responseJson[0].catchPhraseDescriptor).toBe('string');
  expect(typeof responseJson[0].catchPhraseNoun).toBe('string');
  expect(typeof responseJson[0].city).toBe('string');
  expect(typeof responseJson[0].country).toBe('string');
  expect(typeof responseJson[0].creditLimit).toBe('number');
  expect(typeof responseJson[0].email).toBe('string');
  expect(typeof responseJson[0].mobilePhone).toBe('string');
  expect(typeof responseJson[0].name).toBe('string');
  expect(typeof responseJson[0].numberOfEmployees).toBe('number');
  expect(typeof responseJson[0].phone).toBe('string');
  expect(typeof responseJson[0].revenue).toBe('number');
  expect(typeof responseJson[0].streetAddress).toBe('string');
  expect(typeof responseJson[0].website).toBe('string');
  expect(typeof responseJson[0].zipCode).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('companies?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('companies?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].buzzAdjective).toEqual(response2Json[0].buzzAdjective);
  expect(response1Json[0].buzzNoun).toEqual(response2Json[0].buzzNoun);
  expect(response1Json[0].buzzPhrase).toEqual(response2Json[0].buzzPhrase);
  expect(response1Json[0].buzzVerb).toEqual(response2Json[0].buzzVerb);
  expect(response1Json[0].catchPhrase).toEqual(response2Json[0].catchPhrase);
  expect(response1Json[0].catchPhraseAdjective).toEqual(response2Json[0].catchPhraseAdjective);
  expect(response1Json[0].catchPhraseDescriptor).toEqual(response2Json[0].catchPhraseDescriptor);
  expect(response1Json[0].catchPhraseNoun).toEqual(response2Json[0].catchPhraseNoun);
  expect(response1Json[0].city).toEqual(response2Json[0].city);
  expect(response1Json[0].country).toEqual(response2Json[0].country);
  expect(response1Json[0].creditLimit).toEqual(response2Json[0].creditLimit);
  expect(response1Json[0].email).toEqual(response2Json[0].email);
  expect(response1Json[0].mobilePhone).toEqual(response2Json[0].mobilePhone);
  expect(response1Json[0].name).toEqual(response2Json[0].name);
  expect(response1Json[0].numberOfEmployees).toEqual(response2Json[0].numberOfEmployees);
  expect(response1Json[0].phone).toEqual(response2Json[0].phone);
  expect(response1Json[0].revenue).toEqual(response2Json[0].revenue);
  expect(response1Json[0].streetAddress).toEqual(response2Json[0].streetAddress);
  expect(response1Json[0].website).toEqual(response2Json[0].website);
  expect(response1Json[0].zipCode).toEqual(response2Json[0].zipCode);

});