const {test,expect} = require('@playwright/test');

test('Getting Text from WebPage',async ({browser})=>{
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const username=await page.locator("[name='username']");
    const password = await page.locator("[name='password']")
    username.fill("Admin");
    password.fill("admin1231");
    //entering wrong password to check the error message
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(5000);
    const text=await page.locator("//p[text()='Invalid credentials']").textContent();
    console.log("The Text is:",text);
    expect(text).toBe("Invalid credentials");
});