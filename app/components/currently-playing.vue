<script setup lang="ts">
const trackName = ref("");
const { item, is_playing } = await $fetch("/api/spotify/currently-playing");

if (is_playing) {
  trackName.value = item.name;
}
else {
  trackName.value = "Nothing playing!";
}
</script>

<template>
  <h2 class="text-3xl">
    [User] is currently listening to: {{ trackName }}
  </h2>
</template>
