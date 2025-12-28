<script setup lang="ts">
const config = useAppConfig()
const links = [
  {
    label: 'OS',
    href: 'os',
  },
  // {
  //   label: t({ en: 'Company', 'zh-cn': '企业', 'zh-tw': '企業' }),
  //   href: '/',
  // },
  // {
  //   label: t({ en: 'Blog', 'zh-cn': '博客', 'zh-tw': '網誌' }),
  //   href: '/blog',
  // },
  // {
  //   label: t({ en: 'News', 'zh-cn': '新闻', 'zh-tw': '新聞' }),
  //   href: '/news',
  // },
  // {
  //   label: t({ en: 'Recruit', 'zh-cn': '招聘', 'zh-tw': '徵才' }),
  //   href: '/recruit',
  // },
  // {
  //   label: t({ en: 'Contact', 'zh-cn': '联系我们', 'zh-tw': '聯絡我們' }),
  //   href: '/contact',
  // },
]
</script>

<template>
  <header class="px-6 py-3 bg-background/70 top-0 sticky z-10 backdrop-blur-xl">
    <nav class="mx-auto container flex items-center justify-between">
      <NuxtLink :to="$localePath('index')">
        {{ config.name }}
      </NuxtLink>
      <ul class="flex gap-4">
        <li v-for="link in links" :key="link.href">
          <NuxtLink
            :to="$localePath(link.href)"
            class="text-muted-foreground transition-color hover:text-foreground"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
