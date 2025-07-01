<template>
  <LayoutsContainerLight>
    <div class="gift">
      <h1 data-aos="fade-up">
        Hadiah Pernikahan
      </h1>
      <p data-aos="fade-up" data-aos-delay="300">
        Kehadiran anda merupakan hadiah terbaik yang bisa kami harapkan.
        Namun jika anda bermaksud untuk mengirimkan hadiah pernikahan lain,
        silahkan ketuk tombol di bawah ini:
      </p>
      <div class="gift-account">
        <template v-if="brides?.man?.bank">
          <div class="gift-account-item">
            <img :src="useAssets(assetBankMan)" alt="logo" data-aos="zoom-in">
            <h4 data-aos="fade-up">
              {{ brides.man.bank.account }}
            </h4>
            <p data-aos="fade-up">
              a/n {{ brides.man.bank.name }}
            </p>
            <div data-aos="zoom-in" class="copy" @click="copyToClipboard(brides.man.bank.account)">
              <img src="@/assets/icons/copy.svg" alt="copy">Salin
            </div>
          </div>
        </template>
        <template v-if="brides?.woman?.bank">
          <div class="gift-account-item">
            <img :src="useAssets(assetBankWoman)" alt="logo" data-aos="zoom-in">
            <h4 data-aos="fade-up">
              {{ brides.woman.bank.account }}
            </h4>
            <p data-aos="fade-up">
              a/n {{ brides.woman.bank.name }}
            </p>
            <div data-aos="zoom-in" class="copy" @click="copyToClipboard(brides.woman.bank.account)">
              <img src="@/assets/icons/copy.svg" alt="copy">Salin
            </div>
          </div>
        </template>
      </div>
    </div>
  </LayoutsContainerLight>
</template>

<script lang="ts" setup>
const { brides } = storeToRefs(useDataStore())

const assetBankMan   = computed(() => `/assets/images/${brides.value?.man?.bank.type}.png`)
const assetBankWoman = computed(() => `/assets/images/${brides.value?.woman?.bank.type}.png`)

</script>

<style lang="postcss" scoped>
.gift {
  @apply text-center text-primary mt-10;

  h1 {
    @apply font-Tangerine text-5xl mb-4 font-extrabold;
  }

  &-account {
    @apply flex flex-col gap-4 my-4 mt-14;

    &-item {
      @apply mt-4 flex flex-col gap-4;

      h4 {
        @apply text-xl font-semibold;
      }

      > img {
        @apply w-[200px] m-auto md:w-[400px];
      }

      .copy {
        @apply flex items-center gap-2 py-1 px-2 rounded border border-primary w-fit m-auto hover:scale-110 hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer;
        img {
          @apply w-4;
        }
      }
    }
  }
}
</style>
