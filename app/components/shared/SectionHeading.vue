<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="space-y-3 reveal-up">
    <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
      {{ eyebrow }}
    </p>
    <h2 class="text-4xl leading-tight sm:text-5xl">{{ title }}</h2>
    <p v-if="description" class="max-w-2xl text-sm text-muted sm:text-base">{{ description }}</p>
  </header>
</template>
