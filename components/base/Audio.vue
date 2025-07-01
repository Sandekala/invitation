<template>
  <button class="audio" @click="toglePlay">
    <div class="audio-container">
      <template v-if="isPlaying">
        <img src="@/assets/icons/stop.svg" alt="icon-stop">
      </template>
      <template v-else>
        <img src="@/assets/icons/play.svg" alt="icon-play">
      </template>
    </div>
  </button>
</template>

<script lang="ts" setup>
const { toglePlay } = useDataStore()
const { isPlaying } = storeToRefs(useDataStore())
</script>

<style lang="postcss" scoped>
.audio {
  @apply fixed z-10 bottom-4 right-2;

  &-container {
    @apply rounded-full p-2 bg-secondary;

    img {
      @apply w-5 h-5;
    }
  }
}
</style>
