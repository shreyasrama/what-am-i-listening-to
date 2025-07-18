<script setup lang="ts">
import ThemeToggle from "~/components/theme-toggle.vue";
</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="mt-5 font-heading text-6xl font-extrabold tracking-normal">
      What am I listening to?
    </h1>

    <CurrentlyPlaying />

    <RecentlyPlayed />

    <ThemeToggle />
  </div>
</template>
