<script setup lang="ts">
const route = useRoute()
const { getPropertyBySlug } = useProperties()

const property = computed(() => getPropertyBySlug(String(route.params.slug)))

if (!property.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Property not found'
  })
}

const priceText = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(property.value!.price)
)

useSeoMeta({
  title: () => `${property.value?.title} | Urban Haven`,
  description: () => property.value?.summary || 'Luxury property details'
})
</script>

<template>
  <div class="space-y-10 py-8 sm:py-10">
    <section class="shell space-y-6">
      <NuxtLink to="/listings" class="nav-link w-fit text-sm hover:link-accent">← Back to listings</NuxtLink>
      <div class="space-y-3">
        <h1 class="text-5xl leading-none sm:text-6xl">{{ property?.title }}</h1>
        <p class="text-sm text-muted sm:text-base">{{ property?.neighborhood }}, {{ property?.city }}</p>
      </div>
    </section>

    <section class="shell grid gap-4 lg:grid-cols-3">
      <img
        :src="property?.image"
        :alt="property?.title"
        class="h-72 w-full rounded-2xl object-cover lg:col-span-2 lg:h-[30rem]"
      >
      <div class="space-y-4">
        <img
          v-for="item in property?.gallery"
          :key="item"
          :src="item"
          :alt="property?.title"
          class="h-40 w-full rounded-2xl object-cover lg:h-[9.35rem]"
        >
      </div>
    </section>

    <section class="shell grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <article class="surface space-y-6 rounded-2xl p-6 shadow-sm sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <p class="text-3xl font-semibold">{{ priceText }}</p>
          <p class="text-xs uppercase tracking-[0.16em] text-muted">
            {{ property?.beds }} Beds • {{ property?.baths }} Baths • {{ property?.areaSqft }} Sqft
          </p>
        </div>
        <p class="text-muted">{{ property?.description }}</p>
        <div>
          <h2 class="text-2xl">Amenities</h2>
          <ul class="mt-3 grid gap-2 sm:grid-cols-2">
            <li
              v-for="amenity in property?.amenities"
              :key="amenity"
              class="rounded-xl border border-[var(--tone-border)] bg-[color:var(--tone-card)] px-3 py-2 text-sm"
            >
              {{ amenity }}
            </li>
          </ul>
        </div>
      </article>

      <InquiryForm title="Inquire About This Property" compact />
    </section>
  </div>
</template>
