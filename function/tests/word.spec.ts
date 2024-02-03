
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('words');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('words');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('adjective');
  expect(responseJson[0]).toHaveProperty('adverb');
  expect(responseJson[0]).toHaveProperty('conjunction');
  expect(responseJson[0]).toHaveProperty('interjection');
  expect(responseJson[0]).toHaveProperty('noun');
  expect(responseJson[0]).toHaveProperty('preposition');
  expect(responseJson[0]).toHaveProperty('sample');
  expect(responseJson[0]).toHaveProperty('verb');
  expect(responseJson[0]).toHaveProperty('words');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('words');
  const responseJson = await response.json();

  expect(typeof responseJson[0].adjective).toBe('string');
  expect(typeof responseJson[0].adverb).toBe('string');
  expect(typeof responseJson[0].conjunction).toBe('string');
  expect(typeof responseJson[0].interjection).toBe('string');
  expect(typeof responseJson[0].noun).toBe('string');
  expect(typeof responseJson[0].preposition).toBe('string');
  expect(typeof responseJson[0].sample).toBe('string');
  expect(typeof responseJson[0].verb).toBe('string');
  expect(typeof responseJson[0].words).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('words?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('words?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].adjective).toBe(response2Json[0].adjective);
  expect(response1Json[0].adverb).toBe(response2Json[0].adverb);
  expect(response1Json[0].conjunction).toBe(response2Json[0].conjunction);
  expect(response1Json[0].interjection).toBe(response2Json[0].interjection);
  expect(response1Json[0].noun).toBe(response2Json[0].noun);
  expect(response1Json[0].preposition).toBe(response2Json[0].preposition);
  expect(response1Json[0].sample).toBe(response2Json[0].sample);
  expect(response1Json[0].verb).toBe(response2Json[0].verb);
  expect(response1Json[0].words).toBe(response2Json[0].words);
  
});