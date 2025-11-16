<template>
  <NuxtLink to="/" class="brand-link inline-flex items-center gap-3" aria-label="Urban Haven home">
    <span
      class="brand-mark flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--tone-border)] bg-[color:var(--tone-card)] text-[color:var(--tone-accent-2)]"
    >
      <svg
        viewBox="0 0 44 44"
        class="h-6 w-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M22 6L34 15.2V31.4H10V15.2L22 6Z"
          stroke="currentColor"
          stroke-width="1.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 19.2V27.8C15.5 29.3 16.6 30.5 18 30.5H20.8V22.1"
          stroke="currentColor"
          stroke-width="1.9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.5 19.2V30.5"
          stroke="currentColor"
          stroke-width="1.9"
          stroke-linecap="round"
        />
        <path
          d="M23.2 30.5H28.5"
          stroke="currentColor"
          stroke-width="1.9"
          stroke-linecap="round"
        />
      </svg>
    </span>
    <span class="brand-wordmark leading-none">
      <span class="block text-xl font-semibold tracking-[0.06em] sm:text-2xl">Urban Haven</span>
      <span class="block text-[0.62rem] uppercase tracking-[0.26em] text-muted">Private Realty</span>
    </span>
  </NuxtLink>
</template>
