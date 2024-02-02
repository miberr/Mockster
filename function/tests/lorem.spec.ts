
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('lorems');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('lorems');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('lines');
  expect(responseJson[0]).toHaveProperty('paragraph');
  expect(responseJson[0]).toHaveProperty('paragraphs');
  expect(responseJson[0]).toHaveProperty('sentence');
  expect(responseJson[0]).toHaveProperty('sentences');
  expect(responseJson[0]).toHaveProperty('slug');
  expect(responseJson[0]).toHaveProperty('text');
  expect(responseJson[0]).toHaveProperty('word');
  expect(responseJson[0]).toHaveProperty('words');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('lorems');
  const responseJson = await response.json();

  expect(typeof responseJson[0].lines).toBe('string');
  expect(typeof responseJson[0].paragraph).toBe('string');
  expect(typeof responseJson[0].paragraphs).toBe('string');
  expect(typeof responseJson[0].sentence).toBe('string');
  expect(typeof responseJson[0].sentences).toBe('string');
  expect(typeof responseJson[0].slug).toBe('string');
  expect(typeof responseJson[0].text).toBe('string');
  expect(typeof responseJson[0].word).toBe('string');
  expect(typeof responseJson[0].words).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('lorems?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('lorems?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].lines).toBe(response2Json[0].lines);
  expect(response1Json[0].paragraph).toBe(response2Json[0].paragraph);
  expect(response1Json[0].paragraphs).toBe(response2Json[0].paragraphs);
  expect(response1Json[0].sentence).toBe(response2Json[0].sentence);
  expect(response1Json[0].sentences).toBe(response2Json[0].sentences);
  expect(response1Json[0].slug).toBe(response2Json[0].slug);
  expect(response1Json[0].text).toBe(response2Json[0].text);
  expect(response1Json[0].word).toBe(response2Json[0].word);
  expect(response1Json[0].words).toBe(response2Json[0].words);
  
});