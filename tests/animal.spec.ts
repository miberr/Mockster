
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/animals');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/animals');
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
  const response = await request.get('api/animals');
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