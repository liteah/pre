<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="section-card flex flex-col gap-8">
    <div>
      <span text-h6 text-gradient-ai>{{ t('headline') }}</span>
      <h2 class="text-h2 mt-2 sm:text-h3">
        {{ t('title') }}
      <!-- {
        t({
          en: "Don't just save it. Savor it.",
          'zh-cn': '你的收藏，不必吃灰。',
          'zh-tw': '你的收藏，不必再積灰塵。',
        })
      } -->
      </h2>
      <p text-caption mt-2 text-balance>
        {{ t('description') }}
      </p>
    </div>
    <div class="flex flex-col">
      <div class="p-4 rounded-xl bg-secondary relative">
        <p class="font-medium">
          {{ t('illustration.item.title') }}
        </p>
        <p class="text-sm text-secondary-foreground text-pretty">
          {{ t('illustration.item.description') }}
        </p>
        <span class="text-background px-2 py-1 rounded-full bg-primary left-1/2 absolute -translate-x-1/2 -top-4">
          {{ t('illustration.item.tag') }}
        </span>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  headline: 'AI Bookmarks'
  title: 'AI sorts it, summarizes it, and has it ready when you are.'
  description: 'When adding to global bookmarks, content is automatically categorized and summarized.'
  illustration:
    item:
      title: 'Chef\’s Tips: New-York-Style Bagel with Lox'
      description: 'The chef shows how to build the perfect bagel: toast an everything bagel until crisp, smear with scallion cream cheese, layer hand-sliced Nova lox, add tomato, red onion, capers and a crack of black pepper. Key: keep the lox cold, the bagel warm, and assemble just before serving for the ideal contrast.'
      tag: 'Added to "Cooking Tutorials"'
cn:
  headline: 'AI收藏'
  title: '一键收藏，AI替你分门别类，重点也写好。'
  description: '新增全局收藏时，会自动根据内容归类并添加摘要。'
  illustration:
    item:
      title: '厨师长教你：「蛋炒饭」的家常做法'
      description: '厨师长演示家常蛋炒饭，先将鸡蛋炒散，加米饭翻炒至粒粒分明，放少许盐和生抽调味，撒葱花出锅。强调用隔夜饭、少油、大火快炒，米饭蓬松。'
      tag: '已收纳到「烹饪教程」'
tw:
  headline: 'AI記憶'
  title: '隨手收藏，AI幫你自動歸檔，重點也寫好。'
  description: '新增全域收藏時，會自動根據內容歸類並新增摘要。'
  illustration:
    item:
      title: '主廚教你：「蛋炒飯」的家常做法'
      description: '主廚示範家常蛋炒飯，先將雞蛋炒散，再加入米飯翻炒至粒粒分明，加少許鹽和生抽調味，最後撒蔥花起鍋。重點是用隔夜飯、少油、大火快炒，米飯鬆軟。'
      tag: '已收納到「烹飪教程」'
</i18n>
