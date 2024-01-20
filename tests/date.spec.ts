
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