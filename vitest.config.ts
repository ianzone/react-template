import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

// https://cn.vitest.dev/guide/
export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      include: ['src/**/*.ts'],
    },
  },
});
