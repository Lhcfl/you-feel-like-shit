<template>
  <v-footer
    app
  >
    <div class="d-flex flex-column w-100">
      <div class="d-flex w-100">
        <v-btn icon="mdi-weather-sunny" size="small" variant="flat" @click="app.theme = 'light'" />
        <v-btn icon="mdi-weather-night" size="small" variant="flat" @click="app.theme = 'dark'" />
        <v-btn icon="mdi-cellphone" size="small" variant="flat" @click="app.theme = 'follow-device'" />
        <v-select v-model="app.lang" density="compact" hide-details :items="langs" />
      </div>
      <div class="d-flex w-100">
        <v-btn :text="`原网站: ${origin_href}`" @click="gotoSource" />
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  import { useApp } from '@/stores/app';

  const app = useApp();

  const langs = computed(() => [
    { title: 'English', value: 'en' },
    { title: '简体中文', value: 'zh-CN' },
  ]);

  const origin_href = 'https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html'

  const gotoSource = () => {
    window.open(origin_href, '_blank')
  }
</script>
