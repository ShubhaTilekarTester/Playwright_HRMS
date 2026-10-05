import {test} from '@playwright/test'

test('dropdown functionality', async({page}) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
    await page.locator("//input[@name = 'txtPassword']").fill('sureshit');

    await page.locator("//input[@name = 'Submit']").click();

    const frame = page.frameLocator("iframe[@id = 'rightMenu']");

    await frame.locator("//select[@name = 'loc_code']").selectOption({value : "0"});
    await page.waitForTimeout(3000);

    await frame.locator("//input[@name='loc_name']").fill('10398');

    await frame.locator("//input[@value = 'Search']").click();

    await frame.locator("//input[@name = 'chkLocID[]']").check();

    await frame.locator("//input[@value = 'Delete']").click();
})