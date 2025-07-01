<template>
  <LayoutsContainer>
    <div class="home">
      <h1 class="title" data-aos="fade-up">
        Pernikahan kami
      </h1>
      <BasePhotoFrame :image-src="assets?.main" data-aos="zoom-in" />
      <div>
        <h1 class="brides" data-aos="fade-up">
          {{ brides?.man?.fullname || 'Mempelai Pria' }}
        </h1>
        <h1 class="brides" data-aos="fade-up">
          &
        </h1>
        <h1 class="brides" data-aos="fade-up">
          {{ brides?.woman?.fullname || 'Mempelai Wanita' }}
        </h1>
      </div>
      <h2 data-aos="fade-up" data-aos-delay="300">
        {{ getDate(mariage?.mariage_time || '', 'eeee, dd MMM yyyy') }}
      </h2>
      <div class="downtime">
        <template v-for="(value, key, index) in downtime" :key>
          <BaseCardTime data-aos="fade-up" :data-aos-delay="`${index * 200}`">
            <p class="text-2xl">
              {{ value }}
            </p>
            <p>{{ key }}</p>
          </BaseCardTime>
        </template>
      </div>
    </div>
  </LayoutsContainer>
</template>

<script lang="ts" setup>
const { brides, mariage, assets } = storeToRefs(useDataStore())

const downtime = reactive({
  Hari : 0,
  Jam  : 0,
  Menit: 0,
  Detik: 0,
})
const id       = ref()

onMounted(() => {
  id.value = setInterval(() => {
    const now      = new Date().getTime()
    const time     = mariage.value?.mariage_time ? new Date(mariage.value?.mariage_time) : new Date()
    const h        = time.getTime()
    const distance = h - now

    // Perhitungan waktu untuk hari, jam, menit dan detik
    downtime.Hari  = Math.floor(distance / (1000 * 60 * 60 * 24))
    downtime.Jam   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    downtime.Menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    downtime.Detik = Math.floor((distance % (1000 * 60)) / 1000)

    // If the countdown is over, clear the interval
    if (distance <= 0) {
      clearInterval(id.value)
      downtime.Hari  = 0
      downtime.Jam   = 0
      downtime.Menit = 0
      downtime.Detik = 0
    }
  }, 1000)
})
onBeforeMount(() => {
  clearInterval(id.value)
})
</script>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col gap-8 justify-start items-center text-center h-full text-primary py-8;

  .title {
    @apply text-2xl font-bold md:my-8;
  }

  .brides {
    @apply font-Tangerine text-4xl font-extrabold;
  }

  h2 {
    @apply text-xl font-extrabold;
  }

  .downtime {
    @apply flex items-center gap-4 justify-evenly;
  }
}
</style>
