import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  // https://cn.vitest.dev/guide/features.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E6%8B%9F-mocking
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [react(), stylelintPlugin(), eslintPlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
