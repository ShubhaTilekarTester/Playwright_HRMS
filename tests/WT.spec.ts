import {test} from '@playwright/test'

test('WT functionality', async({page}) => {
  
    await page.goto('C://WebTable.html');

    let rowCount = await page.locator("//*[@id = 'idCourse']/tbody/tr").count();
    let colCount = await page.locator("//*[@id = 'idCourse']/tbody/tr[1]/td").count();
    let row_colCount = await page.locator("//*[@id = 'idCourse']/tbody/tr/td").count();
    console.log('Number of rows' , rowCount);
    console.log('Number of columns' , colCount);
    console.log('number of rows & columns', row_colCount);

    //particular cell

    let cellData = await page.locator("//*[@id = 'idCourse']/tbody/tr[2]/td[2]").textContent();
    console.log('Data of particular cell', cellData);


    //data from whole table

    for(let i=1; i<=rowCount; i++);
        let data = await page.locator("//*[@id = 'idCourse']/tbody/tr["+i+"]").innerText();
            console.log(data);
})