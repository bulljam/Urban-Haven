<script setup lang="ts">
import type { Property } from '~/data/properties'

defineProps<{
  property: Property
}>()

const toPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)

const toCardTitle = (title: string) => title.split(' ').slice(0, 2).join(' ')
</script>

<template>
  <Motion
    :initial="{ opacity: 1, y: 16 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :while-hover="{ y: -6 }"
    :transition="{ duration: 0.45 }"
    :viewport="{ once: true, amount: 0.2 }"
    class="group card-surface overflow-hidden rounded-2xl shadow-sm hover:shadow-md"
  >
    <NuxtLink :to="`/listings/${property.slug}`" class="block">
      <img
        :src="property.image"
        :alt="property.title"
        class="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      >
      <div class="space-y-4 p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-2xl">{{ toCardTitle(property.title) }}</h3>
            <p class="text-sm text-muted">{{ property.neighborhood }}, {{ property.city }}</p>
          </div>
          <span class="badge rounded-lg border-[var(--tone-border)] bg-transparent">{{ property.type }}</span>
        </div>
        <p class="text-sm text-muted">{{ property.summary }}</p>
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold">{{ toPrice(property.price) }}</p>
          <p class="text-xs uppercase tracking-[0.15em] text-muted">
            {{ property.beds }} Beds • {{ property.baths }} Baths • {{ property.areaSqft }} Sqft
          </p>
        </div>
      </div>
    </NuxtLink>
  </Motion>
</template>
