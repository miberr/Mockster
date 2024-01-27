
import { test, expect } from '@playwright/test';
import exp = require('constants');

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/gits');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {
  
  const response = await request.get('api/gits');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('branch');
  expect(responseJson[0]).toHaveProperty('commitDate');
  expect(responseJson[0]).toHaveProperty('commitEntry');
  expect(responseJson[0]).toHaveProperty('commitMessage');
  expect(responseJson[0]).toHaveProperty('commitSha');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/gits');
  const responseJson = await response.json();
  
  expect(typeof responseJson[0].branch).toBe('string');
  expect(typeof responseJson[0].commitDate).toBe('string');
  expect(typeof responseJson[0].commitEntry).toBe('string');
  expect(typeof responseJson[0].commitMessage).toBe('string');
  expect(typeof responseJson[0].commitSha).toBe('string');

});

test('Endpoint returns different results with the same seed', async ({ request }) => {

  const response1 = await request.get('api/gits?seed=1');
  const response2 = await request.get('api/gits?seed=1');

  expect(await response1.json()).not.toEqual(await response2.json());

});

test('Seeded properties are consistent with the same seed, except some specified ones', async ({ request }) => {

  const response1 = await request.get('api/gits?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('api/gits?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].branch).toEqual(response2Json[0].branch);
  expect(response1Json[0].commitDate).not.toEqual(response2Json[0].commitDate);
  expect(response1Json[0].commitEntry).not.toEqual(response2Json[0].commitEntry);
  expect(response1Json[0].commitMessage).toEqual(response2Json[0].commitMessage);
  expect(response1Json[0].commitSha).toEqual(response2Json[0].commitSha);

});