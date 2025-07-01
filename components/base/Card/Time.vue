<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.card {
  @apply rounded bg-primary px-2 py-1 shadow shadow-white text-secondary w-16 flex flex-col items-center;
}
</style>
