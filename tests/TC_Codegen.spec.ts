import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sureshitacademy.in/hrms/login.php');
  await page.locator('input[name="txtUserName"]').click();
  await page.locator('input[name="txtUserName"]').fill('sureshit');
  await page.locator('input[name="txtPassword"]').click();
  await page.locator('input[name="txtPassword"]').fill('sureshit');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});