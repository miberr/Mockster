
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