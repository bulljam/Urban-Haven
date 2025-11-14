<script setup lang="ts">
const statsSection = ref<HTMLElement | null>(null)
const years = ref(0)
const volume = ref(0)
const referral = ref(0)

let statsObserver: IntersectionObserver | null = null
let hasAnimatedStats = false

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3

const animateValue = (
  from: number,
  to: number,
  durationMs: number,
  onUpdate: (value: number) => void
) => {
  const start = performance.now()

  const tick = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(1, elapsed / durationMs)
    const eased = easeOutCubic(progress)
    onUpdate(from + (to - from) * eased)

    if (progress < 1) {
      window.requestAnimationFrame(tick)
    }
  }

  window.requestAnimationFrame(tick)
}

const runStatsAnimation = () => {
  if (hasAnimatedStats) {
    return
  }

  hasAnimatedStats = true

  animateValue(0, 14, 1200, (value) => {
    years.value = Math.round(value)
  })

  animateValue(0, 1.8, 1400, (value) => {
    volume.value = Math.round(value * 10) / 10
  })

  animateValue(0, 97, 1300, (value) => {
    referral.value = Math.round(value)
  })
}

onMounted(() => {
  if (!statsSection.value) {
    return
  }

  const el = statsSection.value

  const maybeAnimateImmediately = () => {
    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
    if (inView) {
      runStatsAnimation()
    }
  }

  statsObserver = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      runStatsAnimation()
      statsObserver?.disconnect()
      statsObserver = null
    }
  }, {
    threshold: 0.25
  })

  statsObserver.observe(el)
  maybeAnimateImmediately()
})

onUnmounted(() => {
  statsObserver?.disconnect()
  statsObserver = null
})

useSeoMeta({
  title: 'About | Urban Haven',
  description: 'Meet the boutique team behind Urban Haven and our approach to premium real estate.'
})
</script>

<template>
  <div class="space-y-16 py-8 sm:py-10">
    <section class="shell grid gap-8 lg:grid-cols-2 lg:items-center">
      <div class="space-y-4 reveal-up">
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
        class="h-80 w-full rounded-3xl object-cover shadow-sm reveal-up delay-1 sm:h-[28rem]"
      >
    </section>

    <section ref="statsSection" class="shell grid gap-4 sm:grid-cols-3">
      <article class="surface rounded-2xl p-6 shadow-sm hover-lift reveal-up">
        <p class="text-4xl font-semibold">{{ years }}+</p>
        <p class="mt-2 text-sm text-muted">Years in premium markets</p>
      </article>
      <article class="surface rounded-2xl p-6 shadow-sm hover-lift reveal-up delay-1">
        <p class="text-4xl font-semibold">${{ volume.toFixed(1) }}B</p>
        <p class="mt-2 text-sm text-muted">Closed transaction value</p>
      </article>
      <article class="surface rounded-2xl p-6 shadow-sm hover-lift reveal-up delay-2">
        <p class="text-4xl font-semibold">{{ referral }}%</p>
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
