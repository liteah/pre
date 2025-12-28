<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<template>
  <div
    class="p-3 rounded-xl flex text-pretty items-center relative"
    :class="[
      type === 'user'
        ? 'justify-end bg-primary text-background ms-auto max-w-[75%]'
        : type === 'assistant'
          ? 'justify-start bg-secondary text-foreground'
          : 'text-muted-foreground',
    ]"
  >
    <slot />
  </div>
</template>
