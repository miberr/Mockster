
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('strings');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('strings');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('alpha');
  expect(responseJson[0]).toHaveProperty('alphaNumeric');
  expect(responseJson[0]).toHaveProperty('binary');
  expect(responseJson[0]).toHaveProperty('hexadecimal');
  expect(responseJson[0]).toHaveProperty('nanoid');
  expect(responseJson[0]).toHaveProperty('numeric');
  expect(responseJson[0]).toHaveProperty('octal');
  expect(responseJson[0]).toHaveProperty('sample');
  expect(responseJson[0]).toHaveProperty('symbol');
  expect(responseJson[0]).toHaveProperty('uuid');
});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('strings');
  const responseJson = await response.json();

  expect(typeof responseJson[0].alpha).toBe('string');
  expect(typeof responseJson[0].alphaNumeric).toBe('string');
  expect(typeof responseJson[0].binary).toBe('string');
  expect(typeof responseJson[0].hexadecimal).toBe('string');
  expect(typeof responseJson[0].nanoid).toBe('string');
  expect(typeof responseJson[0].numeric).toBe('string');
  expect(typeof responseJson[0].octal).toBe('string');
  expect(typeof responseJson[0].sample).toBe('string');
  expect(typeof responseJson[0].symbol).toBe('string');
  expect(typeof responseJson[0].uuid).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('strings?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('strings?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].alpha).toBe(response2Json[0].alpha);
  expect(response1Json[0].alphaNumeric).toBe(response2Json[0].alphaNumeric);
  expect(response1Json[0].binary).toBe(response2Json[0].binary);
  expect(response1Json[0].hexadecimal).toBe(response2Json[0].hexadecimal);
  expect(response1Json[0].nanoid).toBe(response2Json[0].nanoid);
  expect(response1Json[0].numeric).toBe(response2Json[0].numeric);
  expect(response1Json[0].octal).toBe(response2Json[0].octal);
  expect(response1Json[0].sample).toBe(response2Json[0].sample);
  expect(response1Json[0].symbol).toBe(response2Json[0].symbol);
  expect(response1Json[0].uuid).toBe(response2Json[0].uuid);

});