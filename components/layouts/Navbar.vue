<template>
  <div class="navbar">
    <div>
      <a href="#target-home">
        <img src="@/assets/icons/home.svg" alt="home">
        Beranda
      </a>
    </div>
    <div>
      <a href="#target-opening">
        <img src="@/assets/icons/mempelai.svg" alt="mempelai">
        Mempelai
      </a>
    </div>
    <div>
      <a href="#target-event">
        <img src="@/assets/icons/clock.svg" alt="clock">
        Acara
      </a>
    </div>
    <div>
      <a href="#target-moment">
        <img src="@/assets/icons/camera.svg" alt="camera">
        Momen
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.navbar {
  @apply w-full fixed bottom-0 rounded-t-lg bg-secondary text-secondary flex items-center gap-4 justify-evenly py-2;

  > div {
    a {
      @apply flex flex-col items-center justify-center gap-1;
    }
  }
}
</style>
