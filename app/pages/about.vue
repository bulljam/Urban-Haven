<script setup lang="ts">
useSeoMeta({
  title: 'About | Urban Haven',
  description: 'Meet the boutique team behind Urban Haven and our approach to premium real estate.'
})
</script>

<template>
  <div class="space-y-16 py-8 sm:py-10">
    <section class="shell grid gap-8 lg:grid-cols-2 lg:items-center">
      <div class="space-y-4">
        <SectionHeading
          eyebrow="About"
          title="A boutique advisory for design-led living."
          description="Urban Haven combines market intelligence with private-client service for buyers, sellers, and investors."
        />
        <p class="text-sm leading-relaxed text-muted sm:text-base">
          Our process is deliberate: understand your goals, curate opportunities, and negotiate with discipline.
          We focus on architecture, neighborhood quality, and long-term value.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
        alt="Urban Haven team"
        class="h-80 w-full rounded-3xl object-cover shadow-sm sm:h-[28rem]"
      >
    </section>

    <section class="shell grid gap-4 sm:grid-cols-3">
      <article class="surface rounded-2xl p-6 shadow-sm">
        <p class="text-4xl font-semibold">14+</p>
        <p class="mt-2 text-sm text-muted">Years in premium markets</p>
      </article>
      <article class="surface rounded-2xl p-6 shadow-sm">
        <p class="text-4xl font-semibold">$1.8B</p>
        <p class="mt-2 text-sm text-muted">Closed transaction value</p>
      </article>
      <article class="surface rounded-2xl p-6 shadow-sm">
        <p class="text-4xl font-semibold">97%</p>
        <p class="mt-2 text-sm text-muted">Client referral rate</p>
      </article>
    </section>

    <CTASection
      title="Partner with a team that values precision."
      description="Whether buying or selling, we create a clear strategy and execute every detail with care."
      button-label="Start a Conversation"
      button-to="/contact"
    />
  </div>
</template>
