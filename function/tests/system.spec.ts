
import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('systems');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('systems');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('commonFileExt');
  expect(responseJson[0]).toHaveProperty('commonFileName');
  expect(responseJson[0]).toHaveProperty('commonFileType');
  expect(responseJson[0]).toHaveProperty('cron');
  expect(responseJson[0]).toHaveProperty('directoryPath');
  expect(responseJson[0]).toHaveProperty('fileExt');
  expect(responseJson[0]).toHaveProperty('fileName');
  expect(responseJson[0]).toHaveProperty('filePath');
  expect(responseJson[0]).toHaveProperty('fileType');
  expect(responseJson[0]).toHaveProperty('mimeType');
  expect(responseJson[0]).toHaveProperty('networkInterface');
  expect(responseJson[0]).toHaveProperty('semver');
});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('systems');
  const responseJson = await response.json();

  expect(typeof responseJson[0].commonFileExt).toBe('string');
  expect(typeof responseJson[0].commonFileName).toBe('string');
  expect(typeof responseJson[0].commonFileType).toBe('string');
  expect(typeof responseJson[0].cron).toBe('string');
  expect(typeof responseJson[0].directoryPath).toBe('string');
  expect(typeof responseJson[0].fileExt).toBe('string');
  expect(typeof responseJson[0].fileName).toBe('string');
  expect(typeof responseJson[0].filePath).toBe('string');
  expect(typeof responseJson[0].fileType).toBe('string');
  expect(typeof responseJson[0].mimeType).toBe('string');
  expect(typeof responseJson[0].networkInterface).toBe('string');
  expect(typeof responseJson[0].semver).toBe('string');

});

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('systems?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('systems?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].commonFileExt).toBe(response2Json[0].commonFileExt);
  expect(response1Json[0].commonFileName).toBe(response2Json[0].commonFileName);
  expect(response1Json[0].commonFileType).toBe(response2Json[0].commonFileType);
  expect(response1Json[0].cron).toBe(response2Json[0].cron);
  expect(response1Json[0].directoryPath).toBe(response2Json[0].directoryPath);
  expect(response1Json[0].fileExt).toBe(response2Json[0].fileExt);
  expect(response1Json[0].fileName).toBe(response2Json[0].fileName);
  expect(response1Json[0].filePath).toBe(response2Json[0].filePath);
  expect(response1Json[0].fileType).toBe(response2Json[0].fileType);
  expect(response1Json[0].mimeType).toBe(response2Json[0].mimeType);
  expect(response1Json[0].networkInterface).toBe(response2Json[0].networkInterface);
  expect(response1Json[0].semver).toBe(response2Json[0].semver);

});