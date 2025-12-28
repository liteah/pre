/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    'motion-v/nuxt',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'cn', language: 'zh-CN', name: '简体中文（中国）' },
      { code: 'tw', language: 'zh-TW', name: '繁體中文（台灣）' },
    ],
    defaultLocale: 'en',
  },
})
