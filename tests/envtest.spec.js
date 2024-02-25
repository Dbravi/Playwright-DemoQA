// @ts-check
const { test, expect } = require('@playwright/test')

test('Console log ENV', ({ page }) => {
  console.log(process.env.URL)
  expect(process.env.URL).toBeDefined()
})
