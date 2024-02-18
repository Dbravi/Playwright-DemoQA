const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./page');
const data = require('./data.json');

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.navigate();
  await playwrightDev.fillForm(data.formData);
});

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.navigate();
  await playwrightDev.fillForm(data.formData);
});
 