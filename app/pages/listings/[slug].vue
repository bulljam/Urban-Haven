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
      <div class="group overflow-hidden rounded-2xl lg:col-span-2">
        <img
          :src="property?.image"
          :alt="property?.title"
          class="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.03] group-hover:contrast-[1.02] lg:h-[30rem]"
        >
      </div>
      <div class="space-y-4">
        <div
          v-for="item in property?.gallery"
          :key="item"
          class="group overflow-hidden rounded-2xl"
        >
          <img
            :src="item"
            :alt="property?.title"
            class="h-40 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.03] group-hover:contrast-[1.02] lg:h-[9.35rem]"
          >
        </div>
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
              class="hover-lift cursor-default rounded-xl border border-[var(--tone-border)] bg-[color:var(--tone-card)] px-3 py-2 text-sm transition-colors duration-300 hover:border-[color:var(--tone-accent)]/45 hover:bg-white hover:shadow-sm"
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
