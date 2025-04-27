<template>
  <v-container :max-width="800">
    <QuestionCard v-if="question" v-bind="question" @goto="goto" />
    <v-card v-else loading />
  </v-container>
</template>

<script lang="ts" setup>
  import { useApp } from '@/stores/app';
  const app = useApp();
  const questionIdx = ref(0);
  const question = computed(() => app.locale?.[questionIdx.value]);

  console.log(app);

  const goto = (name: string) => {
    questionIdx.value = app.locale?.findIndex(q => q.name === name) ?? questionIdx.value;
  };
</script>
