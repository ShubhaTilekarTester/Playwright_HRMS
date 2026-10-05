import{test} from '@playwright/test'


test('frame functionality', async({page}) => {

await page.goto('https://sureshitacademy.in/hrms/login.php');

await page.locator("//input[@name = 'txtUserName']").fill('sureshit');
await page.locator("//input[@name = 'txtPassword']").fill('sureshit');

await page.locator("//input[@name = 'Submit']").click();

const frame = page.frameLocator("//iframe[@id = 'rightMenu']");

await frame.locator("//input[@type = 'button'][@value = 'Add']").click();

await frame.locator("//input[@name = 'txtEmpLastName']").fill('Shubhu');

await frame.locator("//input[@name = 'txtEmpFirstName']").fill('Adi');

await frame.locator("//input[@id = 'btnEdit']").click();


})