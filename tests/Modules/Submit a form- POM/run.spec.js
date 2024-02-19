import { test } from '@playwright/test';
import { basePage } from './page';
import { formData1, formData2 } from './data.json';

// Using Mocha-style describe block
test.describe('Test Suite 01', () => {
  let basepage;

  test.beforeEach(async ({ page }) => {
    basepage = new basePage(page);
    await basepage.navigate();
  });

  test.only('testCase 01', async ({}, testInfo) => {
    await basepage.fillForm(formData1);
    await basepage.validateForm();
    await basepage.captureAndAttachScreenshot(testInfo, 'Evidence');
  });
  
  test('testCase 02', async ({}, testInfo) => {
    await basepage.fillForm(formData2);
    await basepage.validateForm();
    await basepage.captureAndAttachScreenshot(testInfo, 'Evidence');
  });
});
