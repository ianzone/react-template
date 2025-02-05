import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// NOTE - vitest should only test functions, DOM test should use playwright.
// https://cn.vitest.dev/guide/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      coverage: {
        include: ['src/hooks', 'src/utils', 'src/services'],
        exclude: ['**/index.ts'],
      },
    },
  }),
);
