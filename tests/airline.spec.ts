
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/airlines');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/airlines');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('aircraftType');
  expect(responseJson[0]).toHaveProperty('airlineName');
  expect(responseJson[0]).toHaveProperty('airlineCode');
  expect(responseJson[0]).toHaveProperty('airplaneName');
  expect(responseJson[0]).toHaveProperty('airplaneTypeCode');
  expect(responseJson[0]).toHaveProperty('departureAirportName');
  expect(responseJson[0]).toHaveProperty('departureAirportCode');
  expect(responseJson[0]).toHaveProperty('arrivalAirportName');
  expect(responseJson[0]).toHaveProperty('arrivalAirportCode');
  expect(responseJson[0]).toHaveProperty('flightNumber');
  expect(responseJson[0]).toHaveProperty('recordLocator');
  expect(responseJson[0]).toHaveProperty('seat');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/airlines');
  const responseJson = await response.json();
  
  expect(typeof responseJson[0].aircraftType).toBe('string');
  expect(typeof responseJson[0].airlineName).toBe('string');
  expect(typeof responseJson[0].airlineCode).toBe('string');
  expect(typeof responseJson[0].airplaneName).toBe('string');
  expect(typeof responseJson[0].airplaneTypeCode).toBe('string');
  expect(typeof responseJson[0].departureAirportName).toBe('string');
  expect(typeof responseJson[0].departureAirportCode).toBe('string');
  expect(typeof responseJson[0].arrivalAirportName).toBe('string');
  expect(typeof responseJson[0].arrivalAirportCode).toBe('string');
  expect(typeof responseJson[0].flightNumber).toBe('string');
  expect(typeof responseJson[0].recordLocator).toBe('string');
  expect(typeof responseJson[0].seat).toBe('string');
});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('api/airlines?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('api/airlines?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].aircraftType).toEqual(response2Json[0].aircraftType);
  expect(response1Json[0].airlineName).toEqual(response2Json[0].airlineName);
  expect(response1Json[0].airlineCode).toEqual(response2Json[0].airlineCode);
  expect(response1Json[0].airplaneName).toEqual(response2Json[0].airplaneName);
  expect(response1Json[0].airplaneTypeCode).toEqual(response2Json[0].airplaneTypeCode);
  expect(response1Json[0].departureAirportName).toEqual(response2Json[0].departureAirportName);
  expect(response1Json[0].departureAirportCode).toEqual(response2Json[0].departureAirportCode);
  expect(response1Json[0].arrivalAirportName).toEqual(response2Json[0].arrivalAirportName);
  expect(response1Json[0].arrivalAirportCode).toEqual(response2Json[0].arrivalAirportCode);
  expect(response1Json[0].flightNumber).toEqual(response2Json[0].flightNumber);
  expect(response1Json[0].recordLocator).toEqual(response2Json[0].recordLocator);
  expect(response1Json[0].seat).toEqual(response2Json[0].seat);

});