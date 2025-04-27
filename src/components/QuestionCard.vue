<template>
  <v-card variant="text">
    <v-card-text>
      <p v-for="(line, idx) in lines" :key="idx" class="mb-2 question-para">{{ line }}</p>
    </v-card-text>
    <v-card-text>
      <v-divider />
      <div class="d-flex flex-column">
        <v-btn
          v-for="q in questions"
          :key="q.question"
          height="auto"
          variant="text"
          @click="emit('goto', q.goto)"
        >
          <span class="my-3 question-btn-text">
            {{ q.question }}
          </span>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    lines: string[];
    questions: {
      question: string;
      goto: string;
    }[];
  }>();

  const emit = defineEmits<{
    (e: 'goto', name: string): void;
  }>();
</script>

<style lang="css" scoped>
.question-para {
  font-size: 1.7em;
}
.question-btn-text {
  font-size: 1.7em;
  white-space: wrap;
}
</style>
