import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait(),
    ],
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      'id3-rw': '/package/wasm/id3_rw.js',
    },
  },
});
