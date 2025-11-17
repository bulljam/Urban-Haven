<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Urban Haven',
  description: 'Contact Urban Haven for private tours, market advisory, and premium property representation.'
})
</script>

<template>
  <div class="shell grid gap-8 py-8 sm:py-10 lg:grid-cols-[1fr_1.2fr]">
    <section class="space-y-5 reveal-up">
      <SectionHeading
        eyebrow="Contact"
        title="Let us curate your next move."
        description="Share what you are looking for and our team will respond within one business day."
      />
      <div class="surface rounded-2xl p-6 text-sm text-muted shadow-sm hover-lift">
        <p>+1 (310) 555-0199</p>
        <p>concierge@urbanhaven.test</p>
        <p>880 Westview Ave, Los Angeles, CA</p>
      </div>
    </section>
    <InquiryForm title="Send a Message" class="reveal-up delay-1" />
  </div>
</template>
