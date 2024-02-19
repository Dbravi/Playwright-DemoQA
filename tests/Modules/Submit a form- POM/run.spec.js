import { test, expect } from '@playwright/test';
import { basePage } from './page';
import { formData1, formData2 } from './data.json';

// Using Mocha-style describe block
test.describe('Test Suite 01', () => {
  test.beforeEach(async ({ page }) => {
    const basepage = new basePage(page);
    await basepage.navigate();
  });

  test.only('testCase 01', async ({ page }, testInfo) => {
    const basepage = new basePage(page);
    await basepage.fillForm(formData1);
    await basepage.validateForm();
    await basepage.captureAndAttachScreenshot(testInfo, 'Evidence');
  });
  
  test('testCase 02', async ({ page }) => {
    const basepage = new basePage(page);
    await basepage.fillForm(formData2);
    await basepage.validateForm();
    await basepage.captureAndAttachScreenshot(testInfo, 'Evidence');
  });
});