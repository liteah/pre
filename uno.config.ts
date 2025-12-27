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
    'text-h1': 'font-bold text-4xl sm:text-5xl tracking-tight text-pretty text-balance',
    'text-h2': 'font-semibold text-2xl sm:text-3xl tracking-tight text-pretty text-balance',
    'text-h3': 'font-medium text-xl sm:text-2xl',
    'text-h4': 'text-lg sm:text-xl',
    'text-gradient-primary': 'bg-gradient-to-r from-primary to-primary/75 bg-clip-text text-transparent',
  },
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Inter', 'IBMPlexSansSC', 'IBMPlexSansTC'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
