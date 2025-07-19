<script setup lang="ts">
defineProps(["track", "artist", "imageUrl"]);
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-2">
    <img :src="imageUrl" alt="" class="h-12 w-12">

    <div class="flex flex-col items-start">
      <p class="text-base font-semibold">
        {{ track }}
      </p>
      <p class="text-base">
        {{ artist }}
      </p>
    </div>
  </div>
</template>
