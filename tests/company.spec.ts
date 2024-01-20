
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/companies');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/companies');
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
  const response = await request.get('api/companies');
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