<script setup lang="ts">
import type { PropertyType } from '~/data/properties'

const city = defineModel<string>('city', { default: '' })
const type = defineModel<'All' | PropertyType>('type', { default: 'All' })
const minPrice = defineModel<number | null>('minPrice', { default: null })
const maxPrice = defineModel<number | null>('maxPrice', { default: null })

defineProps<{
  allTypes: Array<'All' | PropertyType>
}>()

const resetFilters = () => {
  city.value = ''
  type.value = 'All'
  minPrice.value = null
  maxPrice.value = null
}
</script>

<template>
  <aside class="surface rounded-2xl p-5 shadow-sm">
    <h3 class="text-2xl">Filters</h3>
    <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      <label class="form-control">
        <span class="mb-1 text-xs uppercase tracking-[0.15em] text-muted">City</span>
        <input
          v-model="city"
          type="text"
          placeholder="Search city"
          class="input field-hover rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] focus:border-[var(--tone-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--tone-accent)]/20"
        >
      </label>
      <label class="form-control">
        <span class="mb-1 text-xs uppercase tracking-[0.15em] text-muted">Type</span>
        <select
          v-model="type"
          class="select field-hover rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] focus:border-[var(--tone-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--tone-accent)]/20"
        >
          <option v-for="item in allTypes" :key="item" :value="item">{{ item }}</option>
        </select>
      </label>
      <label class="form-control">
        <span class="mb-1 text-xs uppercase tracking-[0.15em] text-muted">Min Price</span>
        <input
          :value="minPrice ?? ''"
          type="number"
          min="0"
          placeholder="500000"
          class="input field-hover rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] focus:border-[var(--tone-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--tone-accent)]/20"
          @input="minPrice = ($event.target as HTMLInputElement).value ? Number(($event.target as HTMLInputElement).value) : null"
        >
      </label>
      <label class="form-control">
        <span class="mb-1 text-xs uppercase tracking-[0.15em] text-muted">Max Price</span>
        <input
          :value="maxPrice ?? ''"
          type="number"
          min="0"
          placeholder="8000000"
          class="input field-hover rounded-xl border-[var(--tone-border)] bg-[color:var(--tone-surface)] text-[color:var(--tone-text)] focus:border-[var(--tone-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--tone-accent)]/20"
          @input="maxPrice = ($event.target as HTMLInputElement).value ? Number(($event.target as HTMLInputElement).value) : null"
        >
      </label>
      <button
        type="button"
        class="btn hover-lift rounded-xl border-[var(--tone-border)] bg-transparent text-[color:var(--tone-text)] hover:bg-[color:var(--tone-card)] sm:col-span-2 lg:col-span-1"
        @click="resetFilters"
      >
        Reset Filters
      </button>
    </div>
  </aside>
</template>
