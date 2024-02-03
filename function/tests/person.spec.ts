
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('persons');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('persons');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('bio');
  expect(responseJson[0]).toHaveProperty('birthday');
  expect(responseJson[0]).toHaveProperty('businessPhone');
  expect(responseJson[0]).toHaveProperty('city');
  expect(responseJson[0]).toHaveProperty('country');
  expect(responseJson[0]).toHaveProperty('creditLimit');
  expect(responseJson[0]).toHaveProperty('department');
  expect(responseJson[0]).toHaveProperty('description');
  expect(responseJson[0]).toHaveProperty('email');
  expect(responseJson[0]).toHaveProperty('firstName');
  expect(responseJson[0]).toHaveProperty('fullName');
  expect(responseJson[0]).toHaveProperty('gender');
  expect(responseJson[0]).toHaveProperty('jobArea');
  expect(responseJson[0]).toHaveProperty('lastName');
  expect(responseJson[0]).toHaveProperty('sexType');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('persons');
  const responseJson = await response.json();

  expect(typeof responseJson[0].bio).toBe('string');
  expect(typeof responseJson[0].birthday).toBe('string');
  expect(typeof responseJson[0].businessPhone).toBe('string');
  expect(typeof responseJson[0].city).toBe('string');
  expect(typeof responseJson[0].country).toBe('string');
  expect(typeof responseJson[0].creditLimit).toBe('number');
  expect(typeof responseJson[0].department).toBe('string');
  expect(typeof responseJson[0].description).toBe('string');
  expect(typeof responseJson[0].email).toBe('string');
  expect(typeof responseJson[0].firstName).toBe('string');
  expect(typeof responseJson[0].fullName).toBe('string');
  expect(typeof responseJson[0].gender).toBe('string');
  expect(typeof responseJson[0].jobArea).toBe('string');
  expect(typeof responseJson[0].lastName).toBe('string');
  expect(typeof responseJson[0].sexType).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('persons?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('persons?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].bio).toBe(response2Json[0].bio);
  expect(response1Json[0].birthday).toBe(response2Json[0].birthday);
  expect(response1Json[0].businessPhone).toBe(response2Json[0].businessPhone);
  expect(response1Json[0].city).toBe(response2Json[0].city);
  expect(response1Json[0].country).toBe(response2Json[0].country);
  expect(response1Json[0].creditLimit).toBe(response2Json[0].creditLimit);
  expect(response1Json[0].department).toBe(response2Json[0].department);
  expect(response1Json[0].description).toBe(response2Json[0].description);
  expect(response1Json[0].email).toBe(response2Json[0].email);
  expect(response1Json[0].firstName).toBe(response2Json[0].firstName);
  expect(response1Json[0].fullName).toBe(response2Json[0].fullName);
  expect(response1Json[0].gender).toBe(response2Json[0].gender);
  expect(response1Json[0].jobArea).toBe(response2Json[0].jobArea);
  expect(response1Json[0].lastName).toBe(response2Json[0].lastName);
  expect(response1Json[0].sexType).toBe(response2Json[0].sexType);

});