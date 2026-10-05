import * as XLSX from 'xlsx';
import {test} from '@playwright/test';

test('excel sheet', async({page}) => {
    const workbook = XLSX.readFile("C:\\logindata.xlsx");
    const sheet = workbook.Sheets["Sheet1"];
    const data : any[] = XLSX.utils.sheet_to_json(sheet);
    const excelusername = data[0].username;
    const excelpassword = data[0].password;
    console.log("Excel username :" + excelusername);
    console.log("Excel Password :" + excelpassword);

        await page.goto('https://sureshitacademy.in/hrms/login.php');

await page.locator("//input[@name = 'txtUserName']").fill(excelusername);
await page.locator("//input[@name = 'txtPassword']").fill(excelpassword);

await page.locator("//input[@name = 'Submit']").click();

})