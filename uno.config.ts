import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'primary': '#3b82f6',
      'background': '#ffffff',
      'foreground': '#333333',
      'secondary': '#f3f4f6',
      'secondary-foreground': '#4b5563',
      'muted': '#f9fafb',
      'muted-foreground': '#6b7280',
    },
  },
  shortcuts: {
    'text-h1': 'font-bold text-4xl sm:text-5xl tracking-tight text-balance',
    'text-h2': 'font-semibold text-3xl sm:text-4xl tracking-tight text-balance',
    'text-h3': 'font-medium md:font-semibold text-2xl sm:text-3xl tracking-tight text-balance',
    'text-h4': 'text-xl sm:text-2xl',
    'text-h5': 'text-lg sm:text-xl',
    'text-h6': 'text-base sm:text-lg',
    'text-caption': 'text-base sm:text-lg text-muted-foreground',
    'text-gradient-primary': 'bg-gradient-to-r from-primary to-primary/75 bg-clip-text text-transparent',
    'text-gradient-ai': 'bg-gradient-to-r from-blue-600 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent',
    'section-card': 'md:p-8 sm:bg-muted sm:rounded-2xl',
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['IBM Plex Sans', 'IBMPlexSansSC', 'IBMPlexSansTC'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
