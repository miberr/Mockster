
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('musics');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('musics');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('genre');
  expect(responseJson[0]).toHaveProperty('songName');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('musics');
  const responseJson = await response.json();

  expect(typeof responseJson[0].genre).toBe('string');
  expect(typeof responseJson[0].songName).toBe('string');
});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('musics?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('musics?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].genre).toBe(response2Json[0].genre);
  expect(response1Json[0].songName).toBe(response2Json[0].songName);
  
});