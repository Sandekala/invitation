<template>
  <div class="container-app">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.container-app {
  background: url('@/assets/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100dvh;
  padding: 2rem;
}
</style>
