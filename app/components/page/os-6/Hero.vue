<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="py-24 min-h-screen sm:py-32">
    <div class="mx-auto container flex flex-col items-center justify-center">
      <p class="text-h3 text-gradient-primary mb-4">
        PRE OS 6
      </p>
      <h1 class="text-h1">
        {{ t('tagline') }}
      </h1>
    </div>
    <img
      src="/background/os-6-hero.webp"
      alt="Background image"
      class="size-full inset-0 absolute object-cover object-bottom -z-10"
    >
  </div>
</template>

<i18n lang="yaml">
en:
  tagline: 'New Feel, AI Always.'
cn:
  tagline: '新质感，真智能。'
tw:
  tagline: '新質感，真智慧。'
</i18n>
