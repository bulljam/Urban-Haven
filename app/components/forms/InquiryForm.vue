<script setup lang="ts">
const props = defineProps<{
  title?: string
  compact?: boolean
  submitLabel?: string
}>()

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  budget: 'Under $1M',
  message: ''
})

const isSubmitting = ref(false)
const submitState = ref<'idle' | 'success' | 'error'>('idle')
const submitError = ref('')

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.budget = 'Under $1M'
  form.message = ''
}

const handleSubmit = async () => {
  if (isSubmitting.value) {
    return
  }

  submitState.value = 'idle'
  submitError.value = ''
  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        budget: props.compact ? '' : form.budget,
        message: form.message,
        sourcePath: route.fullPath,
        contextTitle: props.title || 'Website Inquiry'
      }
    })

    submitState.value = 'success'
    resetForm()
  } catch (error) {
    submitState.value = 'error'
    submitError.value = error instanceof Error ? error.message : 'Unable to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="surface rounded-3xl p-6 shadow-sm sm:p-8">
    <div class="mb-6 space-y-2">
      <h3 class="text-3xl sm:text-4xl">{{ title || 'Contact an Advisor' }}</h3>
      <p class="text-sm text-muted">
        Share your preferences and we will follow up with curated options.
      </p>
    </div>
    <form class="grid gap-4 sm:grid-cols-2" @submit.prevent="handleSubmit">
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Full Name</span>
        <input
          v-model="form.name"
          type="text"
          class="input field-hover h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          required
          :disabled="isSubmitting"
        >
      </label>
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Email</span>
        <input
          v-model="form.email"
          type="email"
          class="input field-hover h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          required
          :disabled="isSubmitting"
        >
      </label>
      <label class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Phone</span>
        <input
          v-model="form.phone"
          type="tel"
          class="input field-hover h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          :disabled="isSubmitting"
        >
      </label>
      <label v-if="!compact" class="form-control sm:col-span-1">
        <span class="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-muted">Budget Range</span>
        <select
          v-model="form.budget"
          class="select field-hover h-12 rounded-xl border-[var(--tone-border)] bg-white/75 focus:border-[var(--tone-accent)] focus:outline-none"
          :disabled="isSubmitting"
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
          v-model="form.message"
          rows="6"
          class="textarea field-hover min-h-36 w-full rounded-xl border-[var(--tone-border)] bg-white/75 leading-relaxed placeholder:text-[#978f84] focus:border-[var(--tone-accent)] focus:outline-none"
          placeholder="Preferred locations, property type, timeline, and any must-haves."
          required
          :disabled="isSubmitting"
        />
      </label>
      <div class="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          v-if="submitState === 'success'"
          class="text-xs text-emerald-700"
        >
          Message sent successfully. We will be in touch soon.
        </p>
        <p
          v-else-if="submitState === 'error'"
          class="text-xs text-red-700"
        >
          {{ submitError || 'Unable to send message. Please try again.' }}
        </p>
        <p v-else class="text-xs text-muted">By submitting, you agree to be contacted by Urban Haven.</p>
        <button class="btn rounded-xl border-0 px-6 accent-btn hover-lift" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : (submitLabel || 'Send Message') }}
        </button>
      </div>
    </form>
  </section>
</template>
