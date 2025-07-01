<template>
  <div class="container-brown">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.container-brown {
  @apply bg-primary min-h-[100dvh] p-8 pb-14 md:min-h-full;
}
</style>
