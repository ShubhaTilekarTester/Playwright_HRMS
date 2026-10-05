import {test} from '@playwright/test'


test('Keyboard actions functionality', async({page}) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');

     await page.locator("//input[@name = 'txtUserName']").click();

    await page.keyboard.type('sureshit');

    await page.keyboard.press('Tab');
    await page.keyboard.type('sureshit');

    await page.keyboard.press('Enter');

    for(let i = 1; i<=2; i++){
        await page.keyboard.press('Tab');
    }
   
    await page.keyboard.press('Enter');

})