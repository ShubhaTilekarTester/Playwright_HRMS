import {test} from '@playwright/test'


test('alerts functionality', async({page}) => {

    page.on('dialog', async(dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.goto('https://sureshitacademy.in/hrms/login.php');

    await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
    await page.locator("//input[@name = 'Submit']").click();

    await page.locator("//input[@name = 'txtPassword']").fill('sureshit');
    await page.locator("//input[@name = 'Submit']").click();



})