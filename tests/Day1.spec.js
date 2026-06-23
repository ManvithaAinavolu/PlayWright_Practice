const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
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
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await page.locator("[name='username']").fill("Admin");
     await page.locator("[name='password']").fill("admin123");
     await page.locator("button[type='submit']").click();
        await page.waitForTimeout(5000);
    await page.screenshot({path:'orangehrm.png'});
    console.log("The Page Title is:",await page.title());
    expect(await page.title()).toBe("OrangeHRM");
});

/*test('Google Search Test with Page Fixture',async ({page})=>{
    await page.goto('https://www.google.com/');
    await page.screenshot({path:'google_page.png'});
});*/
