
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('vehicles');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('vehicles');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('bicycle');
  expect(responseJson[0]).toHaveProperty('color');
  expect(responseJson[0]).toHaveProperty('fuel');
  expect(responseJson[0]).toHaveProperty('manufacturer');
  expect(responseJson[0]).toHaveProperty('model');
  expect(responseJson[0]).toHaveProperty('type');
  expect(responseJson[0]).toHaveProperty('vehicle');
  expect(responseJson[0]).toHaveProperty('vin');
  expect(responseJson[0]).toHaveProperty('vrm');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('vehicles');
  const responseJson = await response.json();

  expect(typeof responseJson[0].bicycle).toBe('string');
  expect(typeof responseJson[0].color).toBe('string');
  expect(typeof responseJson[0].fuel).toBe('string');
  expect(typeof responseJson[0].manufacturer).toBe('string');
  expect(typeof responseJson[0].model).toBe('string');
  expect(typeof responseJson[0].type).toBe('string');
  expect(typeof responseJson[0].vehicle).toBe('string');
  expect(typeof responseJson[0].vin).toBe('string');
  expect(typeof responseJson[0].vrm).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('vehicles?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('vehicles?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].bicycle).toBe(response2Json[0].bicycle);
  expect(response1Json[0].color).toBe(response2Json[0].color);
  expect(response1Json[0].fuel).toBe(response2Json[0].fuel);
  expect(response1Json[0].manufacturer).toBe(response2Json[0].manufacturer);
  expect(response1Json[0].model).toBe(response2Json[0].model);
  expect(response1Json[0].type).toBe(response2Json[0].type);
  expect(response1Json[0].vehicle).toBe(response2Json[0].vehicle);
  expect(response1Json[0].vin).toBe(response2Json[0].vin);
  expect(response1Json[0].vrm).toBe(response2Json[0].vrm);
  
});