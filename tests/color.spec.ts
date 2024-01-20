
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/colors');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/colors');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('cmyk');
  expect(responseJson[0]).toHaveProperty('colorByCSSColorSpace');
  expect(responseJson[0]).toHaveProperty('cssSupportedFunction');
  expect(responseJson[0]).toHaveProperty('cssSupportedSpace');
  expect(responseJson[0]).toHaveProperty('hsl');
  expect(responseJson[0]).toHaveProperty('human');
  expect(responseJson[0]).toHaveProperty('hwb');
  expect(responseJson[0]).toHaveProperty('lab');
  expect(responseJson[0]).toHaveProperty('lch');
  expect(responseJson[0]).toHaveProperty('rgb');
  expect(responseJson[0]).toHaveProperty('space');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/colors');
  const responseJson = await response.json();

  // Is array with lenght of 4
  expect(Array.isArray(responseJson[0].cmyk)).toBe(true);
  expect(responseJson[0].cmyk.length).toBe(4);
  // Properties are numbers
  responseJson[0].cmyk.forEach(value => {
    expect(typeof value).toBe('number');
  });

  // Is array with lenght of 3
  expect(Array.isArray(responseJson[0].colorByCSSColorSpace)).toBe(true);
  expect(responseJson[0].colorByCSSColorSpace.length).toBe(3);
  // Properties are numbers
  responseJson[0].colorByCSSColorSpace.forEach(value => {
    expect(typeof value).toBe('number');
  });

  expect(typeof responseJson[0].cssSupportedFunction).toBe('string');
  expect(typeof responseJson[0].cssSupportedSpace).toBe('string');  

  // Is array with lenght of 3
  expect(Array.isArray(responseJson[0].hsl)).toBe(true);
  expect(responseJson[0].hsl.length).toBe(3);
  // Properties are numbers
  responseJson[0].hsl.forEach(value => {
    expect(typeof value).toBe('number');
  });

  expect(typeof responseJson[0].human).toBe('string');

  // Is array with lenght of 3
  expect(Array.isArray(responseJson[0].hwb)).toBe(true);
  expect(responseJson[0].hwb.length).toBe(3);
  // Properties are numbers
  responseJson[0].hwb.forEach(value => {
    expect(typeof value).toBe('number');
  });

  // Is array with lenght of 3
  expect(Array.isArray(responseJson[0].lab)).toBe(true);
  expect(responseJson[0].lab.length).toBe(3);
  // Properties are numbers
  responseJson[0].lab.forEach(value => {
    expect(typeof value).toBe('number');
  });

  // Is array with lenght of 3
  expect(Array.isArray(responseJson[0].lch)).toBe(true);
  expect(responseJson[0].lch.length).toBe(3);
  // Properties are numbers
  responseJson[0].lch.forEach(value => {
    expect(typeof value).toBe('number');
  });

  expect(typeof responseJson[0].rgb).toBe('string');
  expect(typeof responseJson[0].space).toBe('string');
  
});