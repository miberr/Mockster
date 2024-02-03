
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('numbers');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('numbers');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('binary');
  expect(responseJson[0]).toHaveProperty('float');
  expect(responseJson[0]).toHaveProperty('hex');
  expect(responseJson[0]).toHaveProperty('int');
  expect(responseJson[0]).toHaveProperty('octal');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('numbers');
  const responseJson = await response.json();

  expect(typeof responseJson[0].binary).toBe('string');
  expect(typeof responseJson[0].float).toBe('number');
  expect(typeof responseJson[0].hex).toBe('string');
  expect(typeof responseJson[0].int).toBe('number');
  expect(typeof responseJson[0].octal).toBe('string');
});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('numbers?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('numbers?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].binary).toBe(response2Json[0].binary);
  expect(response1Json[0].float).toBe(response2Json[0].float);
  expect(response1Json[0].hex).toBe(response2Json[0].hex);
  expect(response1Json[0].int).toBe(response2Json[0].int);
  expect(response1Json[0].octal).toBe(response2Json[0].octal);
  
});