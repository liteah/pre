<script setup lang="ts">
import { motion } from 'motion-v'
import ChatMessage from '@/components/ui/ChatMessage.vue'

defineProps<{ messages: { type: string, message: string }[] }>()
</script>

<template>
  <motion.div
    v-for="(message, index) in messages"
    :key="index"
    :initial="{ opacity: 0, y: -8 }"
    :while-in-view="{ opacity: 1, y: 8 }"
    :exit="{ opacity: 0 }"
    :transition="{ delay: index * 1 }"
    :in-view-options="{ once: true }"
    class="flex flex-col"
  >
    <ChatMessage :type="message.type">
      {{ message.message }}
    </ChatMessage>
  </motion.div>
</template>
