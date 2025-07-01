<template>
  <LayoutsContainerBrown>
    <div class="moment">
      <h1 data-aos="fade-up">
        Moment Kami
      </h1>
      <div class="gallery">
        <img
          v-for="(img, idx) in imgs"
          :key="idx"
          :src="img.alt"
          @click="() => show(idx)">
      </div>
      <client-only>
        <vue-easy-lightbox
          scroll-disabled
          rotate-disabled
          move-disabled
          loop
          zoom-disabled
          :visible="visibleRef"
          :index="indexRef"
          :imgs="imgs"
          @hide="onHide" />
      </client-only>
    </div>
  </LayoutsContainerBrown>
</template>

<script lang="ts" setup>
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'

const { assets } = storeToRefs(useDataStore())

const imgs = computed(() => assets.value?.photos || [])

const {
  show, onHide,
  visibleRef, indexRef,
} = useEasyLightbox({
  imgs     : imgs.value,
  initIndex: 0,
})
</script>

<style lang="postcss" scoped>
.moment {
  @apply text-center text-secondary mb-8;

  h1 {
    @apply font-Tangerine text-5xl my-4 font-extrabold;
  }
}

.gallery {
  margin-top: 4rem;
  column-count: 3;
  column-gap: 16px;
}

.gallery img {
  cursor: pointer;
  width: 100%;
  display: block;
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

@media (max-width: 720px) {
  .gallery {
    column-count: 2;
  }
}

:deep(.vel-modal) {
  background: rgba(0, 0, 0, .8);
}
</style>
