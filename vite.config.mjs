import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // mode: development | staging | production
  const environment = 'production'

  return {
    base: environment === 'production' ? '/sys-hotel-booking' : '/',
    mode: environment,
    logLevel: 'info',
    plugins: [
      vue(),
      basicSsl(),
      AutoImport({
        dts: 'auto-imports.d.ts',
        imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
        dirs: ['./src/composables', './src/stores']
      }),
      Components({
        dirs: ['src/components']
      })
    ],
    envPrefix: ['VITE_'],
    clearScreen: true,
    build: {
      target: 'esnext'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
        '@appConfig': fileURLToPath(new URL('./app.config.js', import.meta.url)),
        '@validations': fileURLToPath(new URL('./src/libs/vee-validate/index.js', import.meta.url))
      }
    },
    optimizeDeps: {
      entries: ['./src/**/*.vue']
    },
    alias: {
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
    server: {
      cors: true,
      host: '127.0.0.1',
      port: env.VITE_SERVER_PORT,
      proxy: {}
    }
  }
})
