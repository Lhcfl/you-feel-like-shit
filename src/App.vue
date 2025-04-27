<template>
  <v-theme-provider :theme="app.theme">
    <v-app>
      <router-view />
    </v-app>
  </v-theme-provider>
</template>

<script lang="ts" setup>
  import { useApp } from './stores/app';

  const app = useApp();
</script>
