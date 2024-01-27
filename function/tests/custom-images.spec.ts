
import { test, expect } from '@playwright/test';
import { validLocales } from "../src/functions/helpers";

test.describe('Count parameter tests', () => {

  test('Endpoint returns 10 objects by default', async ({ request }) => {

    const response = await request.get('api/images');

    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toHaveLength(10);

  });

  test('Endpoint returns 20 objects when count is set to 20', async ({ request }) => {

    const response = await request.get('api/images?count=20');

    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toHaveLength(20);

  });

  test('Endpoint returns 10 objects when count is set to 0', async ({ request }) => {

    const response = await request.get('api/images?count=0');

    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toHaveLength(10);

  });

  test('Endpoint returns 10 objects when count is set to null', async ({ request }) => {

    const response = await request.get('api/images?count=');

    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toHaveLength(10);

  });

  test('Endpoint returns status 400 when count is set to -1', async ({ request }) => {

    const response = await request.get('api/images?count=-1');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  });

  test('Endpoint returns status 400 when count is set to a string', async ({ request }) => {

    const response = await request.get('api/images?count=string');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  });

  test('Endpoint returns status 400 when count is set to a decimal', async ({ request }) => {

    const response = await request.get('api/images?count=1.5');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  })

  test('Endpoint returns status 400 when count is set to a boolean', async ({ request }) => {

    const response = await request.get('api/images?count=true');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  });

  test('Endpoint returns status 400 when count is set to an array', async ({ request }) => {

    const response = await request.get('api/images?count=[]');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  });

  test('Endpoint returns status 400 when count is set to an object', async ({ request }) => {

    const response = await request.get('api/images?count={}');

    expect(response.status() == 400).toBeTruthy();
    expect(await response.json()).toEqual({ error: 'Invalid count parameter. Must be a positive whole number.' });

  });

});

test.describe('Seed parameter tests', () => {

  test('Endpoint returns same results when seed is set to the same value', async ({ request }) => {

    const response1 = await request.get('api/images?seed=1');
    const response2 = await request.get('api/images?seed=1');

    expect(response1.ok()).toBeTruthy();
    expect(response2.ok()).toBeTruthy();
    expect(await response1.json()).toEqual(await response2.json());

  });

});