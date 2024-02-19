const { test, expect } = require('@playwright/test');
const { basePage } = require('./page');
const data = require('./data.json');

test('test01', async ({ page }) => {
  const basepage = new basePage(page);
  await basepage.navigate();
  await basepage.fillForm(data.formData1);
});

test('test02', async ({ page }) => {
  const basepage = new basePage(page);
  await basepage.navigate();
  await basepage.fillForm(data.formData2);
});