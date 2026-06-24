const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
const { loginOrangeHRM } = require('./orangeHRMHelper');

test('Google Search Test with Browser Fixture',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    /*await page.screenshot({path:'google.png'});*/
    console.log("The Page Title is:",await page.title());
    expect(await page.title()).toBe("Google");

});

test('Orange HRM Login Test with Locator',async ({browser})=>{
     const context = await browser.newContext();
     const page=await context.newPage();
     await loginOrangeHRM(page);
     await page.waitForTimeout(5000);
    await page.screenshot({path:'orangehrm.png'});
    console.log("The Page Title is:",await page.title());
    expect(await page.title()).toBe("OrangeHRM");
});

/*test('Google Search Test with Page Fixture',async ({page})=>{
    await page.goto('https://www.google.com/');
    await page.screenshot({path:'google_page.png'});
});*/
