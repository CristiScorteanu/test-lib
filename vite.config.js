import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        main: resolve(__dirname, 'lib/main.js'),
        ...Object.fromEntries(
          glob.sync('lib/**/*.{vue,js}').map(file => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative(
              'lib',
              file.slice(0, file.length - extname(file).length)
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url))
          ])
        )
      },
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  }
})
