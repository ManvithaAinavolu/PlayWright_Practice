const {test,expect} = require('@playwright/test');
const { loginOrangeHRM } = require('./orangeHRMHelper');

test('Getting Text from WebPage',async ({browser})=>{
    const context= await browser.newContext();
    const page=await context.newPage();
    await loginOrangeHRM(page, 'Admin', 'admin1231');
    //entering wrong password to check the error message
    await page.waitForTimeout(5000);
    const text=await page.locator("//p[text()='Invalid credentials']").textContent();
    console.log("The Text is:",text);
    expect(text).toBe("Invalid credentials");
});
