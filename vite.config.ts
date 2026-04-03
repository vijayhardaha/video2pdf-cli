/**
 * ==============================================================================
 * VITE CONFIG — CLI Build (CJS)
 * ==============================================================================
 * Purpose: Build the CLI entry as a single CJS bundle and inject a shebang.
 * Docs:    https://vitejs.dev/guide/build.html
 * ==============================================================================
 */

import type { OutputBundle, Plugin } from 'rollup';
import { defineConfig } from 'vite';

// -------------------------
// Shebang injector plugin
// -------------------------
const shebangPlugin = (shebang = '#!/usr/bin/env node') => {
  return {
    name: 'shebang-inject',
    generateBundle(_options, bundle: OutputBundle) {
      for (const fileName of Object.keys(bundle)) {
        const chunk = bundle[fileName];
        if (chunk && chunk.type === 'chunk' && (fileName.endsWith('.js') || fileName.endsWith('.cjs'))) {
          chunk.code = `${shebang}\n${chunk.code}`;
        }
      }
    },
  } as Plugin;
};

// -------------------------
// Vite config for CLI
// -------------------------
export default defineConfig({
  build: {
    target: 'node20',
    ssr: true,
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    lib: { entry: 'src/index.ts', name: 'video2pdf', fileName: 'index', formats: ['cjs'] },
    rollupOptions: { external: ['child_process', 'fs', 'path', 'commander', 'ora', 'slugify', 'image-to-pdf'] },
  },
  plugins: [shebangPlugin()],
});
