<script setup lang="ts">
defineProps<{
  title?: string
  compact?: boolean
  submitLabel?: string
}>()
</script>

<template>
  <section class="surface rounded-3xl p-6 shadow-sm sm:p-8">
    <div class="mb-6 space-y-2">
      <h3 class="text-3xl sm:text-4xl">{{ title || 'Contact an Advisor' }}</h3>
      <p class="text-sm text-muted">
        Share your preferences and we will follow up with curated options.
      </p>
    </div>
    <form class="grid gap-4 sm:grid-cols-2" @submit.prevent>
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Full Name</span>
        <input
          type="text"
          class="input h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          required
        >
      </label>
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Email</span>
        <input
          type="email"
          class="input h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          required
        >
      </label>
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Phone</span>
        <input
          type="tel"
          class="input h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
        >
      </label>
      <label v-if="!compact" class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Budget Range</span>
        <select
          class="select h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
        >
          <option>Under $1M</option>
          <option>$1M - $3M</option>
          <option>$3M - $6M</option>
          <option>$6M+</option>
        </select>
      </label>
      <label class="form-control sm:col-span-2">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Message</span>
        <textarea
          rows="5"
          class="textarea rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          placeholder="Preferred locations, property type, timeline, and any must-haves."
        />
      </label>
      <div class="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs text-muted">By submitting, you agree to be contacted by Urban Haven.</p>
        <button class="btn rounded-xl border-0 px-6 accent-btn">
          {{ submitLabel || 'Send Message' }}
        </button>
      </div>
    </form>
  </section>
</template>
