import {test,chromium} from '@playwright/test';

test('manual browser test', async () => {
  const browser = await chromium.launch ({headless : false}); //browser
  const context = await browser.newContext(); //new tab
  const page = await context.newPage(); //page

  await page.goto('https://sureshitacademy.in/hrms/login.php');
  await page.waitForTimeout(3000);
  console.log('Application opened');


});