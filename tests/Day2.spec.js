const {test,expect} = require('@playwright/test');

test('Getting Text from WebPage',async ({browser})=>{
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin12344");
    //entering wrong password to check the error message
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(5000);
    const text=await page.locator("//p[text()='Invalid credentials']").textContent();
    console.log("The Text is:",text);
    expect(text).toBe("Invalid credentials");
});