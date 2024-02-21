import { test } from "@playwright/test";
import { basePage } from "./page";
import data from "./data.json";

test.describe("Test Suite 01", () => {
  let basepage;

  test.beforeEach(async ({ page }) => {
    basepage = new basePage(page);
    await basepage.navigate();
  });

  test.only("testCase 01", async ({}, testInfo) => {
    await test.step("Fill Form", async () => {
      await basepage.fillForm(data.formData1);
    });

    await test.step("Validate Form and gather evidence", async () => {
      await basepage.validateForm();
      await basepage.captureAndAttachScreenshot(testInfo, "Evidence");
    });
  });

  test("testCase 02", async ({}, testInfo) => {
    await test.step("Fill Form", async () => {
      await basepage.fillForm(data.formData1);
    });

    await test.step("Validate Form and gather evidence", async () => {
      await basepage.validateForm();
      await basepage.captureAndAttachScreenshot(testInfo, "Evidence");
    });
  });
});
