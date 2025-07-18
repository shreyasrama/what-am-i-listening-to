<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/spotify/currently-playing");
</script>

<template>
  <div class="my-10">
    <h2 v-if="pending" class="text-3xl">
      Loading...
    </h2>

    <h2 v-else-if="error" class="text-3xl">
      😵 We hit an error.
    </h2>

    <div v-if="data?.is_playing" class="text-3xl">
      <h2 class="mb-8 font-heading font-bold">
        🔊 Shreyas is currently listening to:
      </h2>

      <CurrentlyPlayingSong
        :track="data?.item?.name"
        :artist="data?.item?.artists?.[0]?.name"
        :album="data?.item?.album?.name"
        :image-url="data?.item?.album?.images?.[0]?.url"
      />
    </div>

    <div v-else class="text-3xl">
      <h2 class="font-heading font-bold">
        🔇 Shreyas is not listening to anything right now.
      </h2>
    </div>
  </div>
</template>
