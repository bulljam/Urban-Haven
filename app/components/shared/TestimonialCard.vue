<script setup lang="ts">
defineProps<{
  quote: string
  name: string
  role: string
}>()
</script>

<template>
  <article class="card-surface rounded-2xl p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
    <p class="text-sm leading-relaxed text-muted">"{{ quote }}"</p>
    <div class="mt-5">
      <p class="font-semibold">{{ name }}</p>
      <p class="text-xs text-muted">{{ role }}</p>
    </div>
  </article>
</template>
