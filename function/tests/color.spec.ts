
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('colors');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('colors');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('cmyk');
  expect(responseJson[0]).toHaveProperty('colorByCSSColorSpace');
  expect(responseJson[0]).toHaveProperty('cssSupportedFunction');
  expect(responseJson[0]).toHaveProperty('cssSupportedSpace');
  expect(responseJson[0]).toHaveProperty('hsl');
  expect(responseJson[0]).toHaveProperty('humanReadableColor');
  expect(responseJson[0]).toHaveProperty('hwb');
  expect(responseJson[0]).toHaveProperty('lab');
  expect(responseJson[0]).toHaveProperty('lch');
  expect(responseJson[0]).toHaveProperty('rgb');
  expect(responseJson[0]).toHaveProperty('colorSpace');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('colors');
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

  expect(typeof responseJson[0].humanReadableColor).toBe('string');

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
  expect(typeof responseJson[0].colorSpace).toBe('string');
  
});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('colors?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('colors?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].cmyk).toEqual(response2Json[0].cmyk);
  expect(response1Json[0].colorByCSSColorSpace).toEqual(response2Json[0].colorByCSSColorSpace);
  expect(response1Json[0].cssSupportedFunction).toEqual(response2Json[0].cssSupportedFunction);
  expect(response1Json[0].cssSupportedSpace).toEqual(response2Json[0].cssSupportedSpace);
  expect(response1Json[0].hsl).toEqual(response2Json[0].hsl);
  expect(response1Json[0].humanReadableColor).toEqual(response2Json[0].humanReadableColor);
  expect(response1Json[0].hwb).toEqual(response2Json[0].hwb);
  expect(response1Json[0].lab).toEqual(response2Json[0].lab);
  expect(response1Json[0].lch).toEqual(response2Json[0].lch);
  expect(response1Json[0].rgb).toEqual(response2Json[0].rgb);
  expect(response1Json[0].colorSpace).toEqual(response2Json[0].colorSpace);
  
});