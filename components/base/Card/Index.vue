<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.card {
  @apply bg-light text-primary rounded w-fit;
}
</style>
