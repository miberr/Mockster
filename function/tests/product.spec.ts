
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('products');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('products');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('department');
  expect(responseJson[0]).toHaveProperty('isbn');
  expect(responseJson[0]).toHaveProperty('price');
  expect(responseJson[0]).toHaveProperty('product');
  expect(responseJson[0]).toHaveProperty('productAdjective');
  expect(responseJson[0]).toHaveProperty('productDescription');
  expect(responseJson[0]).toHaveProperty('productMaterial');
  expect(responseJson[0]).toHaveProperty('productName');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('products');
  const responseJson = await response.json();

  expect(typeof responseJson[0].department).toBe('string');
  expect(typeof responseJson[0].isbn).toBe('string');
  expect(typeof responseJson[0].price).toBe('number');
  expect(typeof responseJson[0].product).toBe('string');
  expect(typeof responseJson[0].productAdjective).toBe('string');
  expect(typeof responseJson[0].productDescription).toBe('string');
  expect(typeof responseJson[0].productMaterial).toBe('string');
  expect(typeof responseJson[0].productName).toBe('string')

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('products?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('products?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].department).toBe(response2Json[0].department);
  expect(response1Json[0].isbn).toBe(response2Json[0].isbn);
  expect(response1Json[0].price).toBe(response2Json[0].price);
  expect(response1Json[0].product).toBe(response2Json[0].product);
  expect(response1Json[0].productAdjective).toBe(response2Json[0].productAdjective);
  expect(response1Json[0].productDescription).toBe(response2Json[0].productDescription);
  expect(response1Json[0].productMaterial).toBe(response2Json[0].productMaterial);
  expect(response1Json[0].productName).toBe(response2Json[0].productName);

});