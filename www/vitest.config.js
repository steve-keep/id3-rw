import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  resolve: {
    alias: {
      'id3-rw': path.resolve(__dirname, 'package/wasm/id3_rw.js'),
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
});
