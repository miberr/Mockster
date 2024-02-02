
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('sciences');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('sciences');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('chemicalElementSymbol');
  expect(responseJson[0]).toHaveProperty('chemicalElementName');
  expect(responseJson[0]).toHaveProperty('chemicalElementAtomicNumber');
  expect(responseJson[0]).toHaveProperty('unitName');
  expect(responseJson[0]).toHaveProperty('unitSymbol');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('sciences');
  const responseJson = await response.json();

  expect(typeof responseJson[0].chemicalElementSymbol).toBe('string');
  expect(typeof responseJson[0].chemicalElementName).toBe('string');
  expect(typeof responseJson[0].chemicalElementAtomicNumber).toBe('number');
  expect(typeof responseJson[0].unitName).toBe('string');
  expect(typeof responseJson[0].unitSymbol).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('sciences?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('sciences?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].chemicalElementSymbol).toBe(response2Json[0].chemicalElementSymbol);
  expect(response1Json[0].chemicalElementName).toBe(response2Json[0].chemicalElementName);
  expect(response1Json[0].chemicalElementAtomicNumber).toBe(response2Json[0].chemicalElementAtomicNumber);
  expect(response1Json[0].unitName).toBe(response2Json[0].unitName);
  expect(response1Json[0].unitSymbol).toBe(response2Json[0].unitSymbol);

});