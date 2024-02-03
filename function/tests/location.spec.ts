
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('locations');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('locations');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('buildingNumber');
  expect(responseJson[0]).toHaveProperty('cardinalDirection');
  expect(responseJson[0]).toHaveProperty('city');
  expect(responseJson[0]).toHaveProperty('country');
  expect(responseJson[0]).toHaveProperty('countryCode');
  expect(responseJson[0]).toHaveProperty('county');
  expect(responseJson[0]).toHaveProperty('direction');
  expect(responseJson[0]).toHaveProperty('latitude');
  expect(responseJson[0]).toHaveProperty('longitude');
  expect(responseJson[0]).toHaveProperty('ordinalDirection');
  expect(responseJson[0]).toHaveProperty('secondaryAddress');
  expect(responseJson[0]).toHaveProperty('state');
  expect(responseJson[0]).toHaveProperty('street');
  expect(responseJson[0]).toHaveProperty('streetAddress');
  expect(responseJson[0]).toHaveProperty('timeZone');
  expect(responseJson[0]).toHaveProperty('zipCode');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('locations');
  const responseJson = await response.json();

  expect(typeof responseJson[0].buildingNumber).toBe('string');
  expect(typeof responseJson[0].cardinalDirection).toBe('string');
  expect(typeof responseJson[0].city).toBe('string');
  expect(typeof responseJson[0].country).toBe('string');
  expect(typeof responseJson[0].countryCode).toBe('string');
  expect(typeof responseJson[0].county).toBe('string');
  expect(typeof responseJson[0].direction).toBe('string');
  expect(typeof responseJson[0].latitude).toBe('number');
  expect(typeof responseJson[0].longitude).toBe('number');
  expect(typeof responseJson[0].ordinalDirection).toBe('string');
  expect(typeof responseJson[0].secondaryAddress).toBe('string');
  expect(typeof responseJson[0].state).toBe('string');
  expect(typeof responseJson[0].street).toBe('string');
  expect(typeof responseJson[0].streetAddress).toBe('string');
  expect(typeof responseJson[0].timeZone).toBe('string');
  expect(typeof responseJson[0].zipCode).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('locations?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('locations?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].buildingNumber).toEqual(response2Json[0].buildingNumber);
  expect(response1Json[0].cardinalDirection).toEqual(response2Json[0].cardinalDirection);
  expect(response1Json[0].city).toEqual(response2Json[0].city);
  expect(response1Json[0].country).toEqual(response2Json[0].country);
  expect(response1Json[0].countryCode).toEqual(response2Json[0].countryCode);
  expect(response1Json[0].county).toEqual(response2Json[0].county);
  expect(response1Json[0].direction).toEqual(response2Json[0].direction);
  expect(response1Json[0].latitude).toEqual(response2Json[0].latitude);
  expect(response1Json[0].longitude).toEqual(response2Json[0].longitude);
  expect(response1Json[0].ordinalDirection).toEqual(response2Json[0].ordinalDirection);
  expect(response1Json[0].secondaryAddress).toEqual(response2Json[0].secondaryAddress);
  expect(response1Json[0].state).toEqual(response2Json[0].state);
  expect(response1Json[0].street).toEqual(response2Json[0].street);
  expect(response1Json[0].streetAddress).toEqual(response2Json[0].streetAddress);
  expect(response1Json[0].timeZone).toEqual(response2Json[0].timeZone);
  expect(response1Json[0].zipCode).toEqual(response2Json[0].zipCode);
  
});