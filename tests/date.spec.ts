
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/dates');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/dates');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('anytime');
  expect(responseJson[0]).toHaveProperty('birthdate');
  expect(responseJson[0]).toHaveProperty('future');
  expect(responseJson[0]).toHaveProperty('month');
  expect(responseJson[0]).toHaveProperty('past');
  expect(responseJson[0]).toHaveProperty('recent');
  expect(responseJson[0]).toHaveProperty('soon');
  expect(responseJson[0]).toHaveProperty('weekday');
  expect(responseJson[0]).toHaveProperty('year');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/dates');
  const responseJson = await response.json();

  expect(typeof responseJson[0].anytime).toBe('string');
  expect(typeof responseJson[0].birthdate).toBe('string');
  expect(typeof responseJson[0].future).toBe('string');
  expect(typeof responseJson[0].month).toBe('string');
  expect(typeof responseJson[0].past).toBe('string');
  expect(typeof responseJson[0].recent).toBe('string');
  expect(typeof responseJson[0].soon).toBe('string');
  expect(typeof responseJson[0].weekday).toBe('string');
  expect(typeof responseJson[0].year).toBe('number');
});

test('Seeded properties are consistent with the same seed, except specified ones', async ({ request }) => {

  const response1 = await request.get('api/dates?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('api/dates?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].anytime).not.toEqual(response2Json[0].anytime);
  expect(response1Json[0].birthdate).toEqual(response2Json[0].birthdate);
  expect(response1Json[0].future).not.toEqual(response2Json[0].future);
  expect(response1Json[0].month).toEqual(response2Json[0].month);
  expect(response1Json[0].past).not.toEqual(response2Json[0].past);
  expect(response1Json[0].recent).not.toEqual(response2Json[0].recent);
  expect(response1Json[0].soon).not.toEqual(response2Json[0].soon);
  expect(response1Json[0].weekday).toEqual(response2Json[0].weekday);
  expect(response1Json[0].year).toEqual(response2Json[0].year);
  
});