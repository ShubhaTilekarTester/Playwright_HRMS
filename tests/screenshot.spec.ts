import {test} from '@playwright/test'

test('screenshot functionality', async({page}) => {
    await page.goto('https://sureshitacademy.in/hrms/login.php');
    
     await page.locator("//input[@name='txtUserName']").fill("sureshit");
    // enter password
    await page.locator("//input[@name='txtPassword']").fill("sureshit");
    console.log("Username and Password entered");
     // click login
    await page.locator("//input[@name='Submit']").click();
    console.log("Login button clicked");

    // await page.screenshot({path : 'D:\\Playwright_WS\\Playwright_Course\\Screenshot\FullPage.png', fullPage: true});
    

    await page.screenshot({path : 'D:\Playwright_WS\Playwright_Course\Screenshot\area.png', clip : {x:0, y:0, width:500, height: 500} })



})