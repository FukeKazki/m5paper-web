import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:8000');
})
test('capture', async ({ page }) => {

  await page.screenshot({ path: 'screenshot.png' });
});

