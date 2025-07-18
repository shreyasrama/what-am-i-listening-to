<script setup lang="ts">
defineProps(["track", "artist", "album", "imageUrl"]);
</script>

<template>
  <article>
    <div class="flex flex-row items-center justify-center gap-2">
      <img :src="imageUrl" alt="" class="h-24 w-24">

      <div class="flex flex-col items-start">
        <p class="text-2xl font-semibold">
          {{ track }}
        </p>
        <p class="text-xl">
          {{ artist }}
        </p>
        <p class="text-xl">
          {{ album }}
        </p>
      </div>
    </div>
  </article>
</template>
