<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "forest";
  },
  set(value) {
    colorMode.preference = value ? "forest" : "retro";
  },
});
</script>

<template>
  <label class="swap fixed top-2.5 right-2.5 swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <Icon class="swap-on" name="tabler:sun" size="24" />
    <Icon class="swap-off" name="tabler:moon-filled" size="24" />
  </label>
</template>
