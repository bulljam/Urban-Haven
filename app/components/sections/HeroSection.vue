<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
  ctaPrimaryLabel?: string
  ctaPrimaryTo?: string
  ctaSecondaryLabel?: string
  ctaSecondaryTo?: string
}>()
</script>

<template>
  <section class="shell pt-8 sm:pt-10">
    <div class="group grid overflow-hidden rounded-3xl border border-[var(--tone-border)] bg-[color:var(--tone-surface)] lg:grid-cols-2 reveal-up">
      <div class="flex flex-col justify-center gap-6 p-6 sm:p-10 lg:p-14">
        <h1 class="text-5xl leading-none sm:text-6xl lg:text-7xl reveal-up delay-1">{{ title }}</h1>
        <p class="max-w-lg text-sm text-muted sm:text-base reveal-up delay-2">{{ subtitle }}</p>
        <div class="flex flex-wrap gap-3 reveal-up delay-3">
          <NuxtLink :to="ctaPrimaryTo || '/listings'" class="btn rounded-xl border-0 accent-btn hover-lift">
            {{ ctaPrimaryLabel || 'Explore Listings' }}
          </NuxtLink>
          <NuxtLink :to="ctaSecondaryTo || '/contact'" class="btn rounded-xl border-[var(--tone-border)] bg-transparent hover-lift">
            {{ ctaSecondaryLabel || 'Book a Call' }}
          </NuxtLink>
        </div>
      </div>
      <img :src="image" :alt="title" class="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96 lg:h-full">
    </div>
  </section>
</template>
