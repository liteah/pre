<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="mx-auto container">
    <NuxtLink
      :to="$localePath('os')"
      class="px-6 py-8 rounded-xl flex flex-col gap-4 items-center from-primary/50 to-muted bg-gradient-to-b sm:px-14 sm:py-16"
    >
      <h1 class="text-h1">
        PRE OS 6
      </h1>
      <p class="text-h2">
        {{ t('tagline') }}
      </p>
      <span class="text-primary sm:text-lg">
        {{ t('learnMore') }}
      </span>
    </NuxtLink>
  </div>
</template>

<i18n lang="yaml">
en:
  tagline: 'The AI Generation Native OS'
  learnMore: 'Learn More'
cn:
  tagline: '大模型时代的AI原生操作系统'
  learnMore: '进一步了解'
tw:
  tagline: '大模型時代的AI原生作業系統'
  learnMore: '進一步瞭解'
</i18n>
