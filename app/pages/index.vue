<script setup lang="ts">
import ThemeToggle from "~/components/theme-toggle.vue";
</script>

<template>
  <div class="container mx-auto text-center">
    <h1 class="text-5xl">
      What am I listening to?
    </h1>

    <CurrentlyPlaying />

    <RecentlyPlayed />

    <ThemeToggle />
  </div>
</template>
