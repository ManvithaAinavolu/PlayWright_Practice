const LOGIN_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

async function loginOrangeHRM(page, username = 'Admin', password = 'admin123') {
  await page.goto(LOGIN_URL);

  const usernameInput = page.locator("[name='username']");
  const passwordInput = page.locator("[name='password']");

  await usernameInput.fill(username);
  await passwordInput.fill(password);
  await page.locator("button[type='submit']").click();
}

module.exports = { loginOrangeHRM };
