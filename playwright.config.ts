import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    trace: 'on-first-retry',
    ...devices['Pixel 5'],
    viewport: { width: 540, height: 960 },
  },
});
