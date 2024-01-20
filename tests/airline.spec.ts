
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