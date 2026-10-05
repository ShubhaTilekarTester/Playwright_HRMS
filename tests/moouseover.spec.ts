import {test} from '@playwright/test'

test('Mouseover test case', async({page}) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);

    await page.locator("//input[@name = 'txtUserName']").fill("sureshit");
    await page.locator("//input[@name = 'txtPassword']").fill("sureshit");


    await page.locator("//input[@name = 'Submit']").click();

    await page.getByText('PIM').hover();

    await page.getByText('Add Employee').click();

 //   await page.mouse.move(100,100); move the mouse to coordinates
 //   await page.mouse.click(100,100); click at coordinates
 //   await page.mouse.dbclick(100,100); double click at coordinates
 //     await page.mouse.down();  
})