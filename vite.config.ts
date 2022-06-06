import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [
    react(),
    // https://github.com/aleclarson/vite-tsconfig-paths
    tsconfigPaths(),
    eslintPlugin({
      // https://github.com/gxmari007/vite-plugin-eslint
      cache: false,
    }),
    stylelintPlugin({
      // https://github.com/ModyQyW/vite-plugin-stylelint
      cache: false,
    }),
  ],
});
