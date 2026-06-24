const {test,expect,selectOption}=require('@playwright/test');
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

test.only('Navigation to Admin Page', async ({ browser }) => {
  const context = await browser.newContext();
  const page= await context.newPage();
  await loginOrangeHRM(page);
  await page.locator("//li//a//span[text()='Admin']").click();
  await page.locator("//label[text()='Username']/following::input[1]").fill("Admin");
  // const dropdown1=await page.locator("//label[text()='User Role']/following::div[@tabindex='0'][1]");
  // await dropdown1.selectOption("2");
  // await page.locator("//input[@placeholder='Type for hints...']").fill("Manvitha");
  // const dropdown2=await page.locator("//label[text()='Status']/following::div[@tabindex='0'][2]");
  // await dropdown2.selectOption("1");
  
const userRoleDropdown = page.locator("//label[text()='User Role']/following::div[@tabindex='0'][1]");
  await userRoleDropdown.click();
  await page.locator("//div[@role='listbox']//span[text()='Admin']").click();
  await page.locator("//input[@placeholder='Type for hints...']").fill("Manvitha");
  const statusDropdown = page.locator("//label[text()='Status']/following::div[@tabindex='0'][2]");
  await statusDropdown.click();
  await page.locator("//div[@role='listbox']//span[text()='Enabled']").click();
  await page.locator("//button[@type='submit']").click();
  //await page.waitForTimeout(5000);
  await page.pause();
  await page.screenshot({path:'admin_page.png'});

});