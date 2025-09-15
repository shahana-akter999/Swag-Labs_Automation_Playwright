

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
   await page.waitForTimeout(1000);

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(1000);
  
    await page.locator('[data-test="item-4-title-link"]').click();
    await page.waitForTimeout(1000);

  await page.locator('[data-test="add-to-cart"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="checkout"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="firstName"]').click();

  await page.locator('[data-test="firstName"]').fill('shahana');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="lastName"]').click();

  await page.locator('[data-test="lastName"]').fill('akter');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="postalCode"]').click();

  await page.locator('[data-test="postalCode"]').fill('1209');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="continue"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="finish"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="back-to-products"]').click();
  await page.waitForTimeout(1000);

  await page.close();

});
