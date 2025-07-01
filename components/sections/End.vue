<template>
  <LayoutsContainerLight>
    <div class="section-end">
      <h1 data-aos="fade-up">
        Akhir Kata
      </h1>
      <h2 data-aos="fade-up" data-aos-delay="100">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Sahabat berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
      </h2>
      <h3 data-aos="fade-up" data-aos-delay="200">
        “Semoga Allah menghimpun yang terserak dari keduanya, memberkati mereka berdua dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan hikmah serta pemberi rasa aman bagi umat.”
      </h3>
      <p data-aos="fade-up" data-aos-delay="300">
        (Doa Nabi Muhammad SAW, pada pernikahan putrinya Fatimah Azzahra dengan Ali Bin Abi Thalib)
      </p>
      <div data-aos="zoom-in" data-aos-delay="500">
        <span>{{ brides?.man?.fullname }}</span>
        <span>&</span>
        <span>{{ brides?.woman?.fullname }}</span>
      </div>
    </div>
  </LayoutsContainerLight>
</template>

<script lang="ts" setup>
const { brides } = storeToRefs(useDataStore())
</script>

<style lang="postcss" scoped>
.section-end {
  @apply text-center text-primary mt-4 mb-8;

  h1 {
    @apply font-Tangerine text-5xl my-4 font-extrabold;
  }

  h2 {
    @apply my-8;
  }

  h3 {
    @apply font-bold italic my-8;
  }

  p {
    @apply italic my-4 mb-20;
  }

  span {
    @apply text-3xl font-Tangerine block font-extrabold;
  }
}
</style>
