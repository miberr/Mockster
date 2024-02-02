import { test, expect } from '@playwright/test';

test('Endpoint available', async ({ request }) => {

  const response = await request.get('finances');

  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toBeTruthy();

});

test('All properties returned', async ({ request }) => {

  const response = await request.get('finances');
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
  const response = await request.get('finances');
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

test('Seeded properties are consistent with the same seed', async ({ request }) => {

  const response1 = await request.get('finances?seed=1');  
  const response1Json = await response1.json();

  // Implement a delay to ensure the output is different
  await new Promise(f => setTimeout(f, 1000));

  const response2 = await request.get('finances?seed=1');
  const response2Json = await response2.json();

  expect(response1Json[0].accountName).toEqual(response2Json[0].accountName);
  expect(response1Json[0].accountNumber).toEqual(response2Json[0].accountNumber);
  expect(response1Json[0].amount).toEqual(response2Json[0].amount);
  expect(response1Json[0].bic).toEqual(response2Json[0].bic);
  expect(response1Json[0].bitcoinAddress).toEqual(response2Json[0].bitcoinAddress);
  expect(response1Json[0].creditCardCVV).toEqual(response2Json[0].creditCardCVV);
  expect(response1Json[0].creditCardIssuer).toEqual(response2Json[0].creditCardIssuer);
  expect(response1Json[0].creditCardNumber).toEqual(response2Json[0].creditCardNumber);
  expect(response1Json[0].currencyCode).toEqual(response2Json[0].currencyCode);
  expect(response1Json[0].currencyName).toEqual(response2Json[0].currencyName);
  expect(response1Json[0].currencySymbol).toEqual(response2Json[0].currencySymbol);
  expect(response1Json[0].ethereumAddress).toEqual(response2Json[0].ethereumAddress);
  expect(response1Json[0].iban).toEqual(response2Json[0].iban);
  expect(response1Json[0].litecoinAddress).toEqual(response2Json[0].litecoinAddress);
  expect(response1Json[0].maskedNumber).toEqual(response2Json[0].maskedNumber);
  expect(response1Json[0].pin).toEqual(response2Json[0].pin);
  expect(response1Json[0].routingNumber).toEqual(response2Json[0].routingNumber);
  expect(response1Json[0].transactionDescription).toEqual(response2Json[0].transactionDescription);
  expect(response1Json[0].transactionType).toEqual(response2Json[0].transactionType);

});