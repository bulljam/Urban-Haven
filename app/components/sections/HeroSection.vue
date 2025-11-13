<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
  ctaPrimaryLabel?: string
  ctaPrimaryTo?: string
  ctaSecondaryLabel?: string
  ctaSecondaryTo?: string
}>()

const heroRoot = ref<HTMLElement | null>(null)
const heroImage = ref<HTMLImageElement | null>(null)

let heroAnimationCtx: { revert: () => void } | null = null

onMounted(() => {
  const { gsap, ScrollTrigger } = useGsap()

  if (!heroRoot.value || !heroImage.value) {
    return
  }

  heroAnimationCtx = gsap.context(() => {
    gsap.from('[data-hero-stagger]', {
      opacity: 0,
      y: 26,
      duration: 0.9,
      stagger: 0.12
    })

    gsap.fromTo(
      heroImage.value,
      { opacity: 0, y: 20, scale: 1.06 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1 }
    )

    gsap.to(heroImage.value, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRoot.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }, heroRoot.value)

  ScrollTrigger.refresh()
})

onUnmounted(() => {
  heroAnimationCtx?.revert()
})
</script>

<template>
  <section ref="heroRoot" class="shell pt-8 sm:pt-10">
    <div class="group grid overflow-hidden rounded-3xl border border-[var(--tone-border)] bg-[color:var(--tone-surface)] lg:grid-cols-2 reveal-up">
      <Motion
        :initial="{ opacity: 0, x: -24 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.75 }"
        class="flex flex-col justify-center gap-6 p-6 sm:p-10 lg:p-14"
      >
        <h1 data-hero-stagger class="text-5xl leading-none sm:text-6xl lg:text-7xl reveal-up delay-1">{{ title }}</h1>
        <p data-hero-stagger class="max-w-lg text-sm text-muted sm:text-base reveal-up delay-2">{{ subtitle }}</p>
        <div data-hero-stagger class="flex flex-wrap gap-3 reveal-up delay-3">
          <NuxtLink :to="ctaPrimaryTo || '/listings'" class="btn rounded-xl border-0 accent-btn hover-lift">
            {{ ctaPrimaryLabel || 'Explore Listings' }}
          </NuxtLink>
          <NuxtLink :to="ctaSecondaryTo || '/contact'" class="btn rounded-xl border-[var(--tone-border)] bg-transparent hover-lift">
            {{ ctaSecondaryLabel || 'Book a Call' }}
          </NuxtLink>
        </div>
      </Motion>
      <img ref="heroImage" :src="image" :alt="title" class="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96 lg:h-full">
    </div>
  </section>
</template>
