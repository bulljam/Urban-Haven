<script setup lang="ts">
defineProps<{
  quote: string
  name: string
  role: string
}>()
</script>

<template>
  <Motion
    :initial="{ opacity: 1, y: 18 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :while-hover="{ y: -5 }"
    :transition="{ duration: 0.45 }"
    :viewport="{ once: true, amount: 0.2 }"
    class="card-surface rounded-2xl p-6 shadow-sm hover-lift hover:shadow-md"
  >
    <p class="text-sm leading-relaxed text-muted">"{{ quote }}"</p>
    <div class="mt-5">
      <p class="font-semibold">{{ name }}</p>
      <p class="text-xs text-muted">{{ role }}</p>
    </div>
  </Motion>
</template>
