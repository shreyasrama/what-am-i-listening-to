<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/spotify/recently-played");
</script>

<template>
  <div>
    <h2 v-if="pending" class="text-3xl">
      Loading...
    </h2>

    <h2 v-else-if="error" class="text-3xl">
      😵 We hit an error.
    </h2>

    <h2 class="mt-8 mb-4 font-heading text-xl font-bold">
      Recently played:
    </h2>

    <div class="">
      <ul class="mx-auto flex w-fit flex-col items-start gap-3">
        <li v-for="(track, index) in data?.items" :key="index">
          <RecentlyPlayedSong
            :track="track.track.name"
            :artist="track.track.artists[0].name"
            :image-url="track.track.album.images.at(-1)?.url"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
