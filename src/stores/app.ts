// Utilities
import { defineStore } from 'pinia'
import En from '@/locales/en.json';

export const useApp = defineStore('app', () => {
  const theme = ref('follow-device' as 'follow-device' | 'dark' | 'light');
  const lang = ref('zh-CN');

  const original = En;

  const locale = ref<typeof En | null>(null);

  watch(lang, async lang => {
    if (lang === 'en') {
      locale.value = En;
    }
    locale.value = (await import(`@/locales/${lang}.json`)).default;
  }, {
    immediate: true,
  });

  return {
    theme,
    lang,
    locale,
    original,
  }
})
