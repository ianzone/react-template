import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
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
