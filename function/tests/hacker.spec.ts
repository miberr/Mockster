
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('hackers');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('hackers');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('abbreviation');
  expect(responseJson[0]).toHaveProperty('adjective');
  expect(responseJson[0]).toHaveProperty('ingverb');
  expect(responseJson[0]).toHaveProperty('noun');
  expect(responseJson[0]).toHaveProperty('phrase');
  expect(responseJson[0]).toHaveProperty('verb');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('hackers');
  const responseJson = await response.json();

  expect(typeof responseJson[0].abbreviation).toBe('string');
  expect(typeof responseJson[0].adjective).toBe('string');
  expect(typeof responseJson[0].ingverb).toBe('string');
  expect(typeof responseJson[0].noun).toBe('string');
  expect(typeof responseJson[0].phrase).toBe('string');
  expect(typeof responseJson[0].verb).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('hackers?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('hackers?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].abbreviation).toEqual(response2Json[0].abbreviation);
  expect(response1Json[0].adjective).toEqual(response2Json[0].adjective);
  expect(response1Json[0].ingverb).toEqual(response2Json[0].ingverb);
  expect(response1Json[0].noun).toEqual(response2Json[0].noun);
  expect(response1Json[0].phrase).toEqual(response2Json[0].phrase);
  expect(response1Json[0].verb).toEqual(response2Json[0].verb);
  
});