<template>
  <div class="card-event">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss" scoped>
.card-event {
  background: url('@/assets/images/background.png');

  @apply bg-cover border-4 border-primary rounded-2xl p-2;
}
</style>
