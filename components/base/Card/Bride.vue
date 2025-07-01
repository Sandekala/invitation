<template>
  <div class="card-bride" data-aos="flip-right">
    <BasePhotoFrame class="photo" :image-src data-aos="zoom-in" />
    <div class="card-bride-body">
      <h1>{{ name }}</h1>
      <!-- <h2>{{ subName }}</h2> -->
      <h3>{{ childOrder }}</h3>
      <template v-if="childOrder && parent">
        <span>dari</span>
      </template>
      <p>{{ parent }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type   : String,
    default: '',
  },
  name: {
    type   : String,
    default: '',
  },
  subName: {
    type   : String,
    default: '',
  },
  childOrder: {
    type   : String,
    default: '',
  },
  parent: {
    type   : String,
    default: '',
  },
})
</script>

<style lang="postcss" scoped>
.card-bride {
  @apply border-2 border-white bg-primary text-secondary flex flex-col items-center gap-2 relative rounded-3xl min-w-56 max-w-80 shadow shadow-white;

  .photo {
    @apply absolute -top-[40%] left-0 right-0 m-auto;
  }

  &-body {
    @apply pt-32 p-8;

    > h1 {
      @apply font-Tangerine text-5xl font-extrabold;
    }

    > h2 {
      @apply text-xl;
    }

    > p {
      @apply font-bold;
    }
  }
}
</style>
