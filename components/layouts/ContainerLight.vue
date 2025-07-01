<template>
  <div class="container-brown">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.container-brown {
  @apply bg-light min-h-[100dvh] p-8 pb-12 md:min-h-full;
}
</style>
