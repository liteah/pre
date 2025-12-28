<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const messages = [
  {
    type: 'user',
    message: t('aiMessages.user'),
  },
  {
    type: 'system',
    message: t('aiMessages.system'),
  },
  {
    type: 'assistant',
    message: t('aiMessages.assistant'),
  },
]
</script>

<template>
  <div class="gap-8 grid cols-1 items-center md:cols-3">
    <div class="md:col-span-2">
      <span text-h6 text-gradient-ai>{{ t('headline') }}</span>
      <h2 text-h2 mt-2>
        {{ t('title') }}
      </h2>
      <p text-caption mt-4 text-balance>
        {{ t('description') }}
      </p>
    </div>
    <div class="flex flex-col">
      <IllustrationChatMessages :messages="messages" />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  headline: 'AI Memory'
  title: 'It remembers everything.'
  description: 'Every interaction you have with YUME is remembered. Just like a true friend, it remembers your preferences, listens to your emotions, understands your hesitations, and then, at just the right moment in the future, offers you the most fitting response.'
  aiMessages:
    user: 'Today I finally have a holiday'
    system: 'Read 1 memory'
    assistant: 'Hooray! I remember you saying you wanted to take your mother to see plane trees and ginkgo trees by the seaside, and now is the perfect time to see them. The leaves will turn golden yellow, which is very beautiful. Do you need me to help you find specific routes or recommend some good places for taking photos?'
cn:
  headline: 'AI记忆'
  title: '从晨光熹微到夜色深沉，它都记着。'
  description: '你和YUME的每次交流，都能被它记住。就像一个真正的朋友，记得你的每一种喜好，倾听你的每一个情绪，理解你的每一次犹豫，然后在未来的某个瞬间，给你最恰到好处的回应。'
  aiMessages:
    user: '今天我终于放假了'
    system: '读取1条记忆'
    assistant: '太棒了！我记得你上周五说过要带妈妈去海边看梧桐和银杏树，现在天天气正适合去看这些树，它们的叶子会变成金黄色，特别漂亮。要不要我帮你查一下具体路线，或者推荐几个拍照好看的地方？'
tw:
  headline: 'AI記憶'
  title: '從晨光熹微到夜色深沈，它都記著。'
  description: '你和YUME的每次交流，都能被它記住。就像一個真正的朋友，記得你的每一種喜好，傾聽你的每一個情緒，理解你的每一次猶豫，然後在未來的某個瞬間，給你最恰到好處的回應。'
  aiMessages:
    user: '今天我終於放假了'
    system: '讀取1條記憶'
    assistant: '太棒了！我記得你上週五說過要帶媽媽去海邊看梧桐和銀杏樹，現在天氣正適合去看這些樹，它們的葉子會變成金黃色，特別漂亮。要不要我幫你查一下具體路線，或者推薦幾個拍照好看的地方？'
</i18n>
