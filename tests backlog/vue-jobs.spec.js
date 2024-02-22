import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://vuejobs.com/");
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page.getByPlaceholder("Filter by keyword").click();
  await page.getByPlaceholder("Filter by keyword").fill("QA");
  await page.locator(".n-base-selection-tags").first().click();
  await page.getByText("full-time").click();
  await page.locator('[id="__nuxt"]').getByText("full-time").click();
  await page.locator(".n-base-selection-tags").first().click();
  await page.getByText("full-time").click();
  await page.locator('[id="__nuxt"]').getByText("full-time").click();
  await page
    .locator(
      "div:nth-child(3) > .n-select > .n-base-selection > .n-base-selection-tags"
    )
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^junior$/ })
    .first()
    .click();
  await page
    .locator("div")
    .filter({ hasText: "Find the best Vue.js jobs" })
    .nth(2)
    .click();
  await page.getByText("Remote", { exact: true }).click();
  await page.getByText("Remote Allowed").click();
  await page.getByText("Hybrid Work").click();
  await page.locator(".n-base-selection-tags").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^part-time$/ })
    .first()
    .click();
  await page.getByRole("button", { name: "Reset your search" }).click();
});
