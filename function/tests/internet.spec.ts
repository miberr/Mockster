
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('internets');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('internets');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('color');
  expect(responseJson[0]).toHaveProperty('displayName');
  expect(responseJson[0]).toHaveProperty('domainName');
  expect(responseJson[0]).toHaveProperty('domainSuffix');
  expect(responseJson[0]).toHaveProperty('domainWord');
  expect(responseJson[0]).toHaveProperty('email');
  expect(responseJson[0]).toHaveProperty('emoji');
  expect(responseJson[0]).toHaveProperty('exampleEmail');
  expect(responseJson[0]).toHaveProperty('httpMethod');
  expect(responseJson[0]).toHaveProperty('httpStatusCode');
  expect(responseJson[0]).toHaveProperty('ip');
  expect(responseJson[0]).toHaveProperty('ipv4');
  expect(responseJson[0]).toHaveProperty('ipv6');
  expect(responseJson[0]).toHaveProperty('mac');
  expect(responseJson[0]).toHaveProperty('password');
  expect(responseJson[0]).toHaveProperty('port');
  expect(responseJson[0]).toHaveProperty('protocol');
  expect(responseJson[0]).toHaveProperty('url');
  expect(responseJson[0]).toHaveProperty('userAgent');
  expect(responseJson[0]).toHaveProperty('username');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('internets');
  const responseJson = await response.json();

  expect(typeof responseJson[0].color).toBe('string');
  expect(typeof responseJson[0].displayName).toBe('string');
  expect(typeof responseJson[0].domainName).toBe('string');
  expect(typeof responseJson[0].domainSuffix).toBe('string');
  expect(typeof responseJson[0].domainWord).toBe('string');
  expect(typeof responseJson[0].email).toBe('string');
  expect(typeof responseJson[0].emoji).toBe('string');
  expect(typeof responseJson[0].exampleEmail).toBe('string');
  expect(typeof responseJson[0].httpMethod).toBe('string');
  expect(typeof responseJson[0].httpStatusCode).toBe('number');
  expect(typeof responseJson[0].ip).toBe('string');
  expect(typeof responseJson[0].ipv4).toBe('string');
  expect(typeof responseJson[0].ipv6).toBe('string');
  expect(typeof responseJson[0].mac).toBe('string');
  expect(typeof responseJson[0].password).toBe('string');
  expect(typeof responseJson[0].port).toBe('number');
  expect(typeof responseJson[0].protocol).toBe('string');
  expect(typeof responseJson[0].url).toBe('string');
  expect(typeof responseJson[0].userAgent).toBe('string');
  expect(typeof responseJson[0].username).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('internets?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('internets?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].color).toEqual(response2Json[0].color);
  expect(response1Json[0].displayName).toEqual(response2Json[0].displayName);
  expect(response1Json[0].domainName).toEqual(response2Json[0].domainName);
  expect(response1Json[0].domainSuffix).toEqual(response2Json[0].domainSuffix);
  expect(response1Json[0].domainWord).toEqual(response2Json[0].domainWord);
  expect(response1Json[0].email).toEqual(response2Json[0].email);
  expect(response1Json[0].emoji).toEqual(response2Json[0].emoji);
  expect(response1Json[0].exampleEmail).toEqual(response2Json[0].exampleEmail);
  expect(response1Json[0].httpMethod).toEqual(response2Json[0].httpMethod);
  expect(response1Json[0].httpStatusCode).toEqual(response2Json[0].httpStatusCode);
  expect(response1Json[0].ip).toEqual(response2Json[0].ip);
  expect(response1Json[0].ipv4).toEqual(response2Json[0].ipv4);
  expect(response1Json[0].ipv6).toEqual(response2Json[0].ipv6);
  expect(response1Json[0].mac).toEqual(response2Json[0].mac);
  expect(response1Json[0].password).toEqual(response2Json[0].password);
  expect(response1Json[0].port).toEqual(response2Json[0].port);
  expect(response1Json[0].protocol).toEqual(response2Json[0].protocol);
  expect(response1Json[0].url).toEqual(response2Json[0].url);
  expect(response1Json[0].userAgent).toEqual(response2Json[0].userAgent);
  expect(response1Json[0].username).toEqual(response2Json[0].username);
  
});