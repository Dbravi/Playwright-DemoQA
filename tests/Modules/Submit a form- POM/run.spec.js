import { test, expect } from '@playwright/test';
import { basePage } from './page';
import { formData1, formData2 } from './data.json';

test('test01', async ({ page }) => {
  const basepage = new basePage(page);
  await basepage.navigate();
  await basepage.fillForm(formData1);
});

test('test02', async ({ page }) => {
  const basepage = new basePage(page);
  await basepage.navigate();
  await basepage.fillForm(formData2);
});