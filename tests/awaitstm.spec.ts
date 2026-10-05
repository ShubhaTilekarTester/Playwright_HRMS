import {test} from '@playwright/test'

test('wait statement', async({page}) => {
    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);

    await page.locator("//td[text() = 'Login Name : ]").waitFor({ state : "visible" });
    console.log('Login state is visible');

    await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
    await page.locator("//input[@name = 'txtPassword']").fill('sureshit');

    await page.locator("//input[@name = 'Submit']").click();

    await page.getByRole('link', {name : 'logout'}).click();
    await page.waitForLoadState('load');
})