import {test} from '@playwright/test'


test('file upload', async({page}) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');

await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
await page.locator("//input[@name = 'txtPassword']").fill('sureshit');

await page.locator("//input[@name = 'Submit']").click();

const frame = page.frameLocator("//iframe[@id = 'rightMenu']");

await frame.locator("//input[@value = 'Add']").click();
await page.waitForTimeout(3000);

await frame.locator("//input[@name = 'txtEmpLastName']").fill('Shubhu');

await frame.locator("//input[@name = 'txtEmpFirstName']").fill('Adi');

await frame.locator("//input[@name = 'photofile']").setInputFiles('C:/Aditya/Software Testing/1 Manual Testing-SQA & SDLC.pdf');
await page.waitForTimeout(3000);

await frame.locator("//input[@id = 'btnEdit']").click();

})