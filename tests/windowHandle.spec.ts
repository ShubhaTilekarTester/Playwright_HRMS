import {test} from '@playwright/test'

test('window handling functionality', async({browser}) => {

    const context = await browser.newContext();
    const tab1 = await browser.newPage();

    await tab1.goto('file:///C:/Users/shubh/Downloads/multiplewindows.html');
    await tab1.waitForTimeout(3000);

   const [tab2] = await Promise.all([
    context.waitForEvent('page'),
    tab1.locator("//button[@id = 'btn2']").click()

   ]);

   await tab2.waitForTimeout(3000);

   const [tab3] = await Promise.all([
    context.waitForEvent('page'),
    tab1.locator("//button[@id = 'btn3']").click()
   ])

   await tab3.waitForTimeout(3000);

   await tab1.bringToFront();
   await tab1.waitForTimeout(3000);

   await tab2.bringToFront();
   await tab2.waitForTimeout(3000);

})