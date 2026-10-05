import {test}from "@playwright/test";

test("login and logout", async ({page}) => {

    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(3000);
    console.log("Application opened");
    //enter username
    await page.locator("//input[@name='txtUserName']").fill("sureshit");
    // enter password
    await page.locator("//input[@name='txtPassword']").fill("sureshit");
    console.log("Username and Password entered");
     // click login
    await page.locator("//input[@name='Submit']").click();
    console.log("Login button clicked");



 });

