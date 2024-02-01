
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('animals');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('animals');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('bear');
  expect(responseJson[0]).toHaveProperty('bird');
  expect(responseJson[0]).toHaveProperty('cat');
  expect(responseJson[0]).toHaveProperty('cetacean');
  expect(responseJson[0]).toHaveProperty('cow');
  expect(responseJson[0]).toHaveProperty('crocodilia');
  expect(responseJson[0]).toHaveProperty('dog');
  expect(responseJson[0]).toHaveProperty('fish');
  expect(responseJson[0]).toHaveProperty('horse');
  expect(responseJson[0]).toHaveProperty('insect');
  expect(responseJson[0]).toHaveProperty('lion');
  expect(responseJson[0]).toHaveProperty('rabbit');
  expect(responseJson[0]).toHaveProperty('rodent');
  expect(responseJson[0]).toHaveProperty('snake');
  expect(responseJson[0]).toHaveProperty('type');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('animals');
  const responseJson = await response.json();
  
  expect(typeof responseJson[0].bear).toBe('string');
  expect(typeof responseJson[0].bird).toBe('string');
  expect(typeof responseJson[0].cat).toBe('string');
  expect(typeof responseJson[0].cetacean).toBe('string');
  expect(typeof responseJson[0].cow).toBe('string');
  expect(typeof responseJson[0].crocodilia).toBe('string');
  expect(typeof responseJson[0].dog).toBe('string');
  expect(typeof responseJson[0].fish).toBe('string');
  expect(typeof responseJson[0].horse).toBe('string');
  expect(typeof responseJson[0].insect).toBe('string');
  expect(typeof responseJson[0].lion).toBe('string');
  expect(typeof responseJson[0].rabbit).toBe('string');
  expect(typeof responseJson[0].rodent).toBe('string');
  expect(typeof responseJson[0].snake).toBe('string');
  expect(typeof responseJson[0].type).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('animals?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('animals?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].bear).toEqual(response2Json[0].bear);
  expect(response1Json[0].bird).toEqual(response2Json[0].bird);
  expect(response1Json[0].cat).toEqual(response2Json[0].cat);
  expect(response1Json[0].cetacean).toEqual(response2Json[0].cetacean);
  expect(response1Json[0].cow).toEqual(response2Json[0].cow);
  expect(response1Json[0].crocodilia).toEqual(response2Json[0].crocodilia);
  expect(response1Json[0].dog).toEqual(response2Json[0].dog);
  expect(response1Json[0].fish).toEqual(response2Json[0].fish);
  expect(response1Json[0].horse).toEqual(response2Json[0].horse);
  expect(response1Json[0].insect).toEqual(response2Json[0].insect);
  expect(response1Json[0].lion).toEqual(response2Json[0].lion);
  expect(response1Json[0].rabbit).toEqual(response2Json[0].rabbit);
  expect(response1Json[0].rodent).toEqual(response2Json[0].rodent);
  expect(response1Json[0].snake).toEqual(response2Json[0].snake);
  expect(response1Json[0].type).toEqual(response2Json[0].type);

});