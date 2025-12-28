<script setup>
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== currentLocale.value)
})
</script>

<template>
  <div class="text-muted-foreground flex gap-2">
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="transition-color hover:text-foreground">
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>
