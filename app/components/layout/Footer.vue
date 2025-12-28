<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <footer class="px-6 py-3">
    <div class="mx-auto container flex items-center justify-between">
      <span text-muted-foreground>&copy; {{ new Date().getFullYear() }} {{ config.name }}</span>
      <LayoutLocaleSelect />
    </div>
  </footer>
</template>
