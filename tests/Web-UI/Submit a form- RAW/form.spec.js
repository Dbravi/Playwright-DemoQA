import { test, expect } from "@playwright/test";

test.describe("Validation form tests", () => {
  test.beforeEach(async ({ page }) => {
    // Setup code before running any tests
    await page.goto("https://demoqa.com/automation-practice-form");
  });

  test("Test001", async ({ page }) => {
    await page.getByPlaceholder("First Name").fill("Damian");
    await page.getByPlaceholder("Last Name").fill("Bravi");
    await page.getByPlaceholder("name@example.com").fill("damianbravi@somemail.com");
    await page.getByText("Male", { exact: true }).click();
    await page.getByPlaceholder("Mobile Number").fill("1111111111");
    await page.locator("#dateOfBirthInput").click();
    await page.getByLabel("Choose Monday, February 12th,").click();
    await page.locator(".subjects-auto-complete__value-container").click();
    await page.locator("#subjectsInput").fill("Test Mail");
    await page.getByText("Sports").click();
    await page.getByText("Music").click();
    await page.getByPlaceholder("Current Address").click();
    await page.getByPlaceholder("Current Address").fill("Fake address 1234, Buenos Aires, Argentina.");
    await page
      .locator("div")
      .filter({ hasText: /^Select State$/ })
      .nth(3)
      .click();
    await page.getByText("Uttar Pradesh", { exact: true }).click();
    await page.getByText("Select City").click();
    await page.getByText("Agra", { exact: true }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator("#example-modal-sizes-title-lg")).toContainText("Thanks for submitting the form");
  });
});
