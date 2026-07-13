import react from '@vitejs/plugin-react';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    react(),
    process.env.NODE_ENV === 'development' &&
      nitro({
        // https://nitro.zhcndoc.com/config
        serverDir: './server',
        output: {
          dir: 'dist',
        },
      }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    forwardConsole: {
      unhandledErrors: true,
      logLevels: ['warn', 'error', 'info', 'log', 'debug'],
    },
  },
});
