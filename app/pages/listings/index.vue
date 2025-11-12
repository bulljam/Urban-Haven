<script setup lang="ts">
const {
  city,
  type,
  minPrice,
  maxPrice,
  allTypes,
  filteredProperties
} = useProperties()

const pageSize = 6
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredProperties.value.length / pageSize))
)

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredProperties.value.slice(start, start + pageSize)
})

const pageNumbers = computed(() =>
  Array.from({ length: totalPages.value }, (_, index) => index + 1)
)

const goToPage = (page: number) => {
  currentPage.value = Math.min(totalPages.value, Math.max(1, page))
}

const goToNext = () => goToPage(currentPage.value + 1)
const goToPrevious = () => goToPage(currentPage.value - 1)

watch([city, type, minPrice, maxPrice], () => {
  currentPage.value = 1
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) {
    currentPage.value = pages
  }
})

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
        <p class="mb-4 text-sm text-muted">
          {{ filteredProperties.length }} properties found • Page {{ currentPage }} of {{ totalPages }}
        </p>
        <div v-if="paginatedProperties.length" class="grid gap-5 md:grid-cols-2">
          <PropertyCard
            v-for="(property, index) in paginatedProperties"
            :key="property.id"
            :property="property"
            :style="{ animationDelay: `${100 + index * 70}ms` }"
          />
        </div>
        <div v-else class="surface rounded-2xl p-6 text-sm text-muted">
          No listings match the selected filters.
        </div>

        <nav
          v-if="filteredProperties.length > pageSize"
          aria-label="Listings pagination"
          class="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            class="btn btn-sm rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] hover-lift"
            :disabled="currentPage === 1"
            @click="goToPrevious"
          >
            Prev
          </button>
          <button
            v-for="page in pageNumbers"
            :key="page"
            type="button"
            class="btn btn-sm rounded-xl border-[var(--tone-border)] hover-lift"
            :class="page === currentPage ? 'accent-btn border-0' : 'bg-[color:var(--tone-surface)] text-[color:var(--tone-text)]'"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button
            type="button"
            class="btn btn-sm rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] hover-lift"
            :disabled="currentPage === totalPages"
            @click="goToNext"
          >
            Next
          </button>
        </nav>
      </section>
    </div>
  </div>
</template>
