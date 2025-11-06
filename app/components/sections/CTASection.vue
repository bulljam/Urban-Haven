<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonLabel?: string
  buttonTo?: string
}>()
</script>

<template>
  <section class="shell">
    <div class="surface rounded-3xl p-8 shadow-sm sm:p-12">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl space-y-3">
          <h3 class="text-3xl sm:text-4xl">{{ title }}</h3>
          <p class="text-sm text-muted sm:text-base">{{ description }}</p>
        </div>
        <NuxtLink :to="buttonTo || '/contact'" class="btn rounded-xl border-0 px-6 accent-btn">
          {{ buttonLabel || 'Contact Advisor' }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
