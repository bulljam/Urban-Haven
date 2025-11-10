<script setup lang="ts">
const {
  city,
  type,
  minPrice,
  maxPrice,
  allTypes,
  filteredProperties
} = useProperties()

useSeoMeta({
  title: 'Listings | Urban Haven',
  description: 'Browse premium homes, penthouses, villas, and apartments across top U.S. cities.'
})
</script>

<template>
  <div class="shell space-y-8 py-8 sm:py-10">
    <SectionHeading
      eyebrow="Portfolio"
      title="Curated Listings"
      description="Filter by location, property type, and budget to refine your search."
    />

    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <FilterPanel
        class="reveal-up delay-1"
        v-model:city="city"
        v-model:type="type"
        v-model:min-price="minPrice"
        v-model:max-price="maxPrice"
        :all-types="allTypes"
      />
      <section class="reveal-up delay-2">
        <p class="mb-4 text-sm text-muted">{{ filteredProperties.length }} properties found</p>
        <div class="grid gap-5 md:grid-cols-2">
          <PropertyCard
            v-for="(property, index) in filteredProperties"
            :key="property.id"
            :property="property"
            :style="{ animationDelay: `${100 + index * 70}ms` }"
          />
        </div>
      </section>
    </div>
  </div>
</template>
