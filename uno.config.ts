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
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Inter', 'IBM Plex Sans SC', 'IBMPlexSansTC'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
