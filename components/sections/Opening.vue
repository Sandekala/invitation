<template>
  <LayoutsContainer>
    <div class="opening">
      <div class="opening-head">
        <p data-aos="fade-up">
          Assalamu'alaikum Warahmatullahi Wabarakaatuh
        </p>
        <p data-aos="fade-up">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Sahabat untuk hadir pada acara pernikahan kami.
        </p>
      </div>
      <div class="opening-body">
        <BaseCardBride
          sub-name="Mempelai Pria"
          :image-src="assets?.man"
          :child-order="brides?.man?.child_order"
          :name="brides?.man.name"
          :parent="brides?.man?.parent" />
        <BaseCardBride
          sub-name="Mempelai Wanita"
          :image-src="assets?.woman"
          :child-order="brides?.woman?.child_order"
          :name="brides?.woman.name"
          :parent="brides?.woman?.parent" />
      </div>
    </div>
  </LayoutsContainer>
</template>

<script lang="ts" setup>
const { brides, assets } = storeToRefs(useDataStore())
</script>

<style lang="postcss" scoped>
.opening {
  @apply text-center h-full py-8;

  &-head {
    @apply md:mb-24 md:mt-10;

    > h2 {
      @apply font-Amiri text-2xl;
    }

    > p:first-of-type {
      @apply text-3xl font-Tangerine my-4 font-extrabold;
    }

    > p:last-of-type {
      @apply text-justify;
    }
  }

  &-body {
    @apply flex flex-col gap-40 pt-40 pb-10 md:flex-row items-center justify-center;
  }
}
</style>
