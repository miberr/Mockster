
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/databases');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/databases');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('collation');
  expect(responseJson[0]).toHaveProperty('column');
  expect(responseJson[0]).toHaveProperty('engine');
  expect(responseJson[0]).toHaveProperty('mongodbObjectId');
  expect(responseJson[0]).toHaveProperty('type');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/databases');
  const responseJson = await response.json();

  expect(typeof responseJson[0].collation).toBe('string');
  expect(typeof responseJson[0].column).toBe('string');
  expect(typeof responseJson[0].engine).toBe('string');
  expect(typeof responseJson[0].mongodbObjectId).toBe('string');
  expect(typeof responseJson[0].type).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('api/databases?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('api/databases?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].collation).toEqual(response2Json[0].collation);
  expect(response1Json[0].column).toEqual(response2Json[0].column);
  expect(response1Json[0].engine).toEqual(response2Json[0].engine);
  expect(response1Json[0].mongodbObjectId).toEqual(response2Json[0].mongodbObjectId);
  expect(response1Json[0].type).toEqual(response2Json[0].type);

});