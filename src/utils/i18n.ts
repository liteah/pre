import type { GetStaticPathsResult } from 'astro'
import { getRelativeLocaleUrl } from 'astro:i18n'
import { defalutLocale, locales } from '@/i18n.config'

/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", zh-cn: "你好", ... }
 */
export interface Multilingual { [key: string]: string }

/**
 * Helper to get the translation function
 * @param locale - The current language
 * @returns The translation function
 */
export function useTranslations(locale: string | undefined = defalutLocale) {
  return function t(multilingual: Multilingual | string): string {
    if (typeof multilingual === 'string')
      return multilingual
    else
      return multilingual[locale] || multilingual[defalutLocale] || ''
  }
}

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
  return Object.keys(locales).map((locale) => {
    return {
      locale,
      path: getRelativeLocaleUrl(locale, url.pathname.replace(/^\/[a-z-]+/i, '')),
    }
  })
}

interface LocalePath {
  locale: string
  path: string
}

/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export function getLocaleParams(): GetStaticPathsResult {
  return Object.keys(locales).map((locale) => {
    if (locale === 'en') {
      return {
        params: { locale: undefined },
      }
    }
    return {
      params: { locale },
    }
  })
}
