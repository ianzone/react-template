import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import biomePlugin from 'vite-plugin-biome';
import stylelintPlugin from 'vite-plugin-stylelint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  // https://cn.vitest.dev/guide/features.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E6%8B%9F-mocking
  // server: {
  //   port: 30000,
  // },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [
    react(),
    stylelintPlugin(),
    biomePlugin({ mode: 'check', files: 'src', applyFixes: true, failOnError: true }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
