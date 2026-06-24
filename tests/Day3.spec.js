const {test,expect}=require('@playwright/test');
const { loginOrangeHRM } = require('./orangeHRMHelper');
test('login to OrangeHRM', async ({ page }) => {
  await loginOrangeHRM(page);
});
test('Getting Text from WebPage',async ({browser})=>{
    const context= await browser.newContext();
    const page=await context.newPage();
    await loginOrangeHRM(page);
    await page.waitForTimeout(5000);
    const text=await page.locator("//h6[text()='Dashboard']").textContent();
    console.log("The Text is:",text);
    expect(text).toBe("Dashboard");
});
