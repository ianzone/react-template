import { defineConfig } from 'vitest/config';

// NOTE - vitest should only test functions; DOM test should use playwright.
// https://cn.vitest.dev/guide/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.ts'],
    },
  },
});
