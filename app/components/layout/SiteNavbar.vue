<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Listings', to: '/listings' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' }
]

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-[var(--tone-border)] bg-[color:var(--tone-surface)]/95 backdrop-blur">
    <div class="shell">
      <div class="flex h-16 items-center justify-between">
        <BrandLogo />
        <nav class="hidden items-center gap-8 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium transition-colors hover:link-accent"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-sm rounded-xl border-0 accent-btn">Contact Advisor</NuxtLink>
        </nav>
        <button
          aria-label="Toggle mobile menu"
          class="btn btn-ghost btn-sm rounded-xl md:hidden"
          @click="isOpen = !isOpen"
        >
          <span class="text-lg">{{ isOpen ? '×' : '☰' }}</span>
        </button>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="isOpen" class="border-t border-[var(--tone-border)] bg-[color:var(--tone-surface)] md:hidden">
        <div class="shell grid gap-2 py-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="rounded-xl px-3 py-2 text-sm font-medium hover:bg-[color:var(--tone-card)]"
          >
            {{ link.name }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn rounded-xl border-0 accent-btn">Contact Advisor</NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
