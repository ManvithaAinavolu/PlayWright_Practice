const {test} = require('@playwright/test');

test('Google Search Test with Browser Fixture',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    await page.screenshot({path:'google.png'});
});


test('Google Search Test with Page Fixture',async ({page})=>{
    await page.goto('https://www.google.com/');
    await page.screenshot({path:'google_page.png'});
});
