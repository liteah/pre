export const defalutLocale: string = 'en'

interface LocaleConfig {
  readonly label: string
  readonly lang?: string
  readonly dir?: 'ltr' | 'rtl'
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const locales: Record<string, LocaleConfig> = {
  'en': {
    label: 'English',
    lang: 'en-US',
  },
  'zh-cn': {
    label: '简体中文',
    lang: 'zh-CN',
  },
  'zh-tw': {
    label: '繁體中文',
    lang: 'zh-TW',
  },
}
