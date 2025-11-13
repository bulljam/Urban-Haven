<script setup lang="ts">
import { testimonials } from '~/data/properties'

const { featuredProperties } = useProperties()
const { gsap } = useGsap()

const featuredSection = ref<HTMLElement | null>(null)
const testimonialsSection = ref<HTMLElement | null>(null)

onMounted(() => {
  if (featuredSection.value) {
    gsap.from(featuredSection.value.querySelectorAll('.js-featured-card'), {
      y: 28,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      scrollTrigger: {
        trigger: featuredSection.value,
        start: 'top 78%',
        once: true
      }
    })
  }

  if (testimonialsSection.value) {
    gsap.from(testimonialsSection.value.querySelectorAll('.js-testimonial-card'), {
      y: 24,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      scrollTrigger: {
        trigger: testimonialsSection.value,
        start: 'top 80%',
        once: true
      }
    })
  }
})

useSeoMeta({
  title: 'Urban Haven | Premium Real Estate',
  description:
    'Discover luxury properties curated for modern city living, guided by boutique real estate advisors.'
})
</script>

<template>
  <div class="space-y-20 pb-20">
    <HeroSection
      title="Modern Luxury, Quiet Confidence."
      subtitle="Urban Haven curates exceptional homes and private listings with a tailored, design-forward approach."
      image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
    />

    <section ref="featuredSection" class="shell space-y-8">
      <SectionHeading
        eyebrow="Featured"
        title="Signature Properties"
        description="A selection of residences defined by architecture, setting, and long-term value."
      />
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <PropertyCard
          v-for="(property, index) in featuredProperties"
          :key="property.id"
          class="js-featured-card"
          :property="property"
          :style="{ animationDelay: `${120 + index * 90}ms` }"
        />
      </div>
    </section>

    <section ref="testimonialsSection" class="shell grid gap-8 lg:grid-cols-3">
      <SectionHeading
        class="lg:col-span-3"
        eyebrow="Client Stories"
        title="Trusted by discerning buyers"
      />
      <TestimonialCard
        v-for="(item, index) in testimonials"
        :key="item.id"
        class="js-testimonial-card"
        :quote="item.quote"
        :name="item.name"
        :role="item.role"
        :style="{ animationDelay: `${120 + index * 90}ms` }"
      />
    </section>

    <CTASection
      title="Start your property search with a private brief."
      description="Share your goals and timeline. Our advisory team will curate matching properties and guide each next step."
      button-label="Book a Call"
      button-to="/contact"
    />
  </div>
</template>
