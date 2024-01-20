import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('api/finances');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('api/finances');
  const responseJson = await response.json();
  
  expect(responseJson[0]).toHaveProperty('accountName');
  expect(responseJson[0]).toHaveProperty('accountNumber');
  expect(responseJson[0]).toHaveProperty('amount');
  expect(responseJson[0]).toHaveProperty('bic');
  expect(responseJson[0]).toHaveProperty('bitcoinAddress');
  expect(responseJson[0]).toHaveProperty('creditCardCVV');
  expect(responseJson[0]).toHaveProperty('creditCardIssuer');
  expect(responseJson[0]).toHaveProperty('creditCardNumber');
  expect(responseJson[0]).toHaveProperty('currencyCode');
  expect(responseJson[0]).toHaveProperty('currencyName');
  expect(responseJson[0]).toHaveProperty('currencySymbol');
  expect(responseJson[0]).toHaveProperty('ethereumAddress');
  expect(responseJson[0]).toHaveProperty('iban');
  expect(responseJson[0]).toHaveProperty('litecoinAddress');
  expect(responseJson[0]).toHaveProperty('maskedNumber');
  expect(responseJson[0]).toHaveProperty('pin');
  expect(responseJson[0]).toHaveProperty('routingNumber');
  expect(responseJson[0]).toHaveProperty('transactionDescription');
  expect(responseJson[0]).toHaveProperty('transactionType');

});

test('All properties have current datatypes', async ({ request }) => {
  const response = await request.get('api/finances');
  const responseJson = await response.json();

  expect(typeof responseJson[0].accountName).toBe('string');
  expect(typeof responseJson[0].accountNumber).toBe('string');
  expect(typeof responseJson[0].amount).toBe('number');
  expect(typeof responseJson[0].bic).toBe('string');
  expect(typeof responseJson[0].bitcoinAddress).toBe('string');
  expect(typeof responseJson[0].creditCardCVV).toBe('string');
  expect(typeof responseJson[0].creditCardIssuer).toBe('string');
  expect(typeof responseJson[0].creditCardNumber).toBe('string');
  expect(typeof responseJson[0].currencyCode).toBe('string');
  expect(typeof responseJson[0].currencyName).toBe('string');
  expect(typeof responseJson[0].currencySymbol).toBe('string');
  expect(typeof responseJson[0].ethereumAddress).toBe('string');
  expect(typeof responseJson[0].iban).toBe('string');
  expect(typeof responseJson[0].litecoinAddress).toBe('string');
  expect(typeof responseJson[0].maskedNumber).toBe('string');
  expect(typeof responseJson[0].pin).toBe('string');
  expect(typeof responseJson[0].routingNumber).toBe('string');
  expect(typeof responseJson[0].transactionDescription).toBe('string');
  expect(typeof responseJson[0].transactionType).toBe('string');
});