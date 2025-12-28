<script setup lang="ts">
const { locale } = useI18n()

const fontUrls = {
  en: 'https://fonts.googleapis.cn/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap',
  cn: 'https://font.emtech.cc/css/IBMPlexSansSC',
  tw: 'https://font.emtech.cc/css/IBMPlexSansTC',
}

useHead({
  style: [
    `@import url("${fontUrls[locale.value]}");`,
  ],
})
</script>

<template>
  <div class="text-foreground mx-auto select-text antialiased">
    <LayoutHeader />
    <main min-h-screen>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style>
html,
body {
  text-autospace: normal;
}
</style>
