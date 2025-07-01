<template>
  <img class="photo-frame" :src="imageSrc" alt="photo-frame">
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type   : String,
    default: '',
  },
})
</script>

<style lang="postcss" scoped>
  .photo-frame {
    @apply rounded-full border-2 border-white w-56 h-56 object-cover;
  }
</style>
