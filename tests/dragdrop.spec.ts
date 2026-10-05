import {test} from '@playwright/test'

test('drag and drop functionality', async({page}) => {

    await page.goto('https://jqueryui.com/droppable/');

    const frame = page.frameLocator('.demo-frame');
    await frame.locator('#draggable').dragTo(frame.locator('#droppable'))

    console.log("Drag and dop functionality completed")
})