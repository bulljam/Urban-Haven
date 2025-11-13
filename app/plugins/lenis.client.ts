import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.92
  })

  let rafId = 0

  const raf = (time: number) => {
    lenis.raf(time)
    rafId = window.requestAnimationFrame(raf)
  }

  rafId = window.requestAnimationFrame(raf)

  lenis.on('scroll', () => {
    nuxtApp.$ScrollTrigger?.update()
  })

  nuxtApp.hook('page:finish', () => {
    lenis.resize()
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
