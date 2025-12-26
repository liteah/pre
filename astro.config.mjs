import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import { defalutLocale, locales } from './src/i18n.config'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), unocss()],
  i18n: {
    defaultLocale: defalutLocale,
    locales: Object.keys(locales),
  },
})
