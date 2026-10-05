import {test} from '@playwright/test'


test('promise all functionality', async({page}) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');


    await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
    await page.waitForTimeout(3000);
    await Promise.all([
           page.locator("//input[@name = 'txtPassword']").fill('sureshit'),

           page.locator("//input[@name = 'Submit']").click()

    ]);

})