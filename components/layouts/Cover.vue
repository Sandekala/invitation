<template>
  <div v-if="!isOpen" class="layouts-cover">
    <div class="cover left" :class="{ opened: open }">
      <img :class="{ opened: open }" class="corner left left-0 top-0 rotate-90" src="@/assets/icons/flower.svg" alt="flower">
      <img :class="{ opened: open }" class="corner left left-0 bottom-0" src="@/assets/icons/flower.svg" alt="flower">
    </div>
    <div class="cover right" :class="{ opened: open }">
      <img :class="{ opened: open }" class="corner right right-0 top-0 rotate-180" src="@/assets/icons/flower.svg" alt="flower">
      <img :class="{ opened: open }" class="corner right right-0 bottom-0 -rotate-90" src="@/assets/icons/flower.svg" alt="flower">
    </div>

    <div class="main" :class="{ opened: open }">
      <BasePhotoFrame :image-src="assets?.main" data-aos="zoom-in" />
      <div data-aos="fade-up">
        <h1>{{ brides?.man?.name || 'Pria' }} & {{ brides?.woman?.name || 'Wanita' }}</h1>
        <h4>Kepada Bapak/Ibu/Sahabat</h4>
        <h2>{{ route?.query?.to || 'Tamu Undangan' }}</h2>
        <h4>Kami mengundang Anda untuk menghadiri acara pernikahan kami.</h4>
      </div>
      <div class="btn" @click="openInv">
        <img src="@/assets/icons/envelop.svg"> Buka Undangan
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const open = defineModel<boolean>({ default: false })

const { toglePlay }      = useDataStore()
const isOpen             = ref(false)
const route              = useRoute()
const { brides, assets } = storeToRefs(useDataStore())

const openInv = (): void => {
  toglePlay()
  open.value = true
  const id   = setTimeout(() => {
    isOpen.value = true
    clearTimeout(id)
  }, 500)
}

</script>

<style lang="postcss" scoped>
  .layouts-cover {
    @apply w-screen h-[100dvh] text-secondary bg-transparent fixed z-50;

    .cover {
      @apply w-[50vw] h-full bg-primary relative;

      &.left {
        @apply fixed z-50 left-0 transition-all duration-500;
      }

      &.right {
        @apply fixed z-50 right-0 transition-all duration-500;
      }

      &.opened {
        @apply w-0;
      }

      .corner {
        @apply w-24 h-24 fixed z-50 transition-all duration-500;

        &.right.opened {
          @apply -right-full;
        }
        &.left.opened {
          @apply -left-full;
        }
      }
    }

    .main {
      @apply w-full h-full fixed z-50 top-0 left-0 right-0 m-auto transition-all duration-500 flex items-center flex-col justify-evenly;

     > div {
        @apply text-center;

        h1 {
          @apply font-Tangerine text-4xl mb-4 font-extrabold;
        }

        h2 {
          @apply font-bold my-4;
        }
      }

      > .btn {
        @apply bg-black rounded-lg px-2 py-1 flex items-center gap-2 cursor-pointer;

        > img {
          @apply w-5 h-5;
        }
      }

      &.opened {
        @apply left-full;
      }
    }
  }
</style>
