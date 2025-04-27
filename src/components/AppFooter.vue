<template>
  <v-footer
    app
  >
    <v-btn icon="mdi-weather-sunny" variant="flat" @click="app.theme = 'light'" />
    <v-btn icon="mdi-weather-night" variant="flat" @click="app.theme = 'dark'" />
    <v-btn icon="mdi-cellphone" variant="flat" @click="app.theme = 'follow-device'" />
    <v-btn text="原网站" @click="gotoSource" />
    <v-select v-model="app.lang" hide-details :items="langs" />
  </v-footer>
</template>

<script setup lang="ts">
  import { useApp } from '@/stores/app';

  const app = useApp();

  const langs = computed(() => [
    { title: 'English', value: 'en' },
    { title: '简体中文', value: 'zh-CN' },
  ]);

  const gotoSource = () => {
    window.open('https://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play/index.html', '_blank')
  }
</script>
