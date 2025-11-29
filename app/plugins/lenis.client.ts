import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.92
  })

  let rafId = 0

  const raf = (time: number) => {
    lenis.raf(time)
    rafId = window.requestAnimationFrame(raf)
  }

  rafId = window.requestAnimationFrame(raf)

  lenis.on('scroll', () => {
    const scrollTrigger = nuxtApp.$ScrollTrigger as { update: () => void } | undefined
    scrollTrigger?.update()
  })

  nuxtApp.hook('page:finish', () => {
    lenis.resize()
    lenis.scrollTo(0, { immediate: true, force: true })
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
    })
  }

  return {
    provide: {
      lenis
    }
  }
})
