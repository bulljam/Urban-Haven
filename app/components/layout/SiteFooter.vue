<template>
  <footer class="mt-20 border-t border-[var(--tone-border)] bg-[color:var(--tone-surface)]">
    <div class="shell grid gap-10 py-12 md:grid-cols-3">
      <section class="space-y-3">
        <BrandLogo />
        <p class="text-sm text-muted">
          Boutique real estate advisory for clients seeking refined homes in top urban neighborhoods.
        </p>
      </section>
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Explore</h3>
        <div class="grid gap-2 text-sm">
          <NuxtLink to="/" class="nav-link w-fit hover:link-accent">Home</NuxtLink>
          <NuxtLink to="/listings" class="nav-link w-fit hover:link-accent">Listings</NuxtLink>
          <NuxtLink to="/about" class="nav-link w-fit hover:link-accent">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link w-fit hover:link-accent">Contact</NuxtLink>
        </div>
      </section>
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Contact</h3>
        <p class="text-sm text-muted">+1 (310) 555-0199</p>
        <p class="text-sm text-muted">concierge@urbanhaven.com</p>
        <p class="text-sm text-muted">880 Westview Ave, Los Angeles, CA</p>
      </section>
    </div>
  </footer>
</template>
