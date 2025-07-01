<template>
  <LayoutsContainerLight>
    <div class="section-event">
      <h1 data-aos="fade-up">
        Rangkaian Acara
      </h1>
      <div class="section-event-list">
        <BaseCardEvent data-aos="fade-up">
          <div class="section-event-list-item">
            <div class="logo">
              <img src="@/assets/icons/handshake.svg" alt="handshake">
            </div>
            <h3>Akad Nikah</h3>
            <h6>Bertempat di</h6>
            <span>{{ defineLocation(mariage?.mariage_location)?.location }}</span>
            <p> {{ defineLocation(mariage?.mariage_location)?.address }}</p>
            <div class="icon">
              <img src="@/assets/icons/schedule.svg" alt="schedule">
            </div>
            <p>{{ getDate(String(mariage?.mariage_time), 'eeee') }}</p>
            <p class="font-bold">
              {{ getDate(String(mariage?.mariage_time), 'dd MMM yyyy') }}
            </p>
            <div class="icon">
              <img src="@/assets/icons/clock2.svg" alt="clock2">
            </div>
            <p class="font-bold">
              {{ getDate(String(mariage?.mariage_time), 'hh:mm z') }}
            </p>
          </div>
        </BaseCardEvent>
        <BaseCardEvent data-aos="fade-up" data-aos-delay="300">
          <div class="section-event-list-item">
            <div class="logo">
              <img src="@/assets/icons/heart2.svg" alt="heart2">
            </div>
            <h3>Resepsi</h3>
            <h6>Bertempat di</h6>
            <span>{{ defineLocation(mariage?.reception_location)?.location }}</span>
            <p> {{ defineLocation(mariage?.reception_location)?.address }}</p>
            <div class="icon">
              <img src="@/assets/icons/schedule.svg" alt="schedule">
            </div>
            <p>{{ getDate(String(mariage?.reception_time), 'eeee') }}</p>
            <p class="font-bold">
              {{ getDate(String(mariage?.reception_time), ' dd MMM yyyy') }}
            </p>
            <div class="icon">
              <img src="@/assets/icons/clock2.svg" alt="clock2">
            </div>
            <p class="font-bold">
              {{ getDate(String(mariage?.reception_time), 'hh:mm z') }} s/d {{ getDate(String(mariage?.reception_time_end), 'hh:mm z') }}
            </p>
          </div>
        </BaseCardEvent>
        <BaseCardEvent data-aos="fade-up" data-aos-delay="500">
          <div class="section-event-list-item">
            <div class="logo">
              <img src="@/assets/icons/map.svg" alt="map">
            </div>
            <h3>Lokasi Acara</h3>
            <iframe
              :src="mariage?.reception_location_map"
              class="map"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" />
            <a :href="mariage?.reception_location_map_btn" target="_blank">
              <div class="btn">
                Buka Maps
                <img src="@/assets/icons/map.svg" alt="map" class="btn-icon">
              </div>
            </a>
          </div>
        </BaseCardEvent>
      </div>
    </div>
  </LayoutsContainerLight>
</template>

<script lang="ts" setup>
const { mariage } = storeToRefs(useDataStore())

const defineLocation = (loc?: string): {location: string, address: string} | undefined => {
  if (loc === undefined) return
  const location = loc.match(/"([^"]*)"/)
  const address  = loc.match(/"([^"]*)"\s*(.*)/)
  if (location || address) {
    return {
      location: location?.[1] as string,
      address : address?.[2] as string,
    }
  } else {
    return {
      address : loc,
      location: '',
    }
  }
}
</script>

<style lang="postcss" scoped>
.section-event {
  @apply text-center text-primary mb-8;

  h1 {
    @apply font-Tangerine text-5xl mb-4 md:mb-32 font-extrabold;
  }

  &-list {
    @apply flex flex-col items-stretch gap-4 md:w-fit md:m-auto lg:flex-row md:gap-4 md:justify-evenly;

    &-item {
      @apply md:w-72;

      span {
        @apply font-bold;
      }

      h3 {
        @apply text-2xl my-2;
      }

      .logo {
        @apply bg-primary rounded-full w-16 p-2 m-auto;
      }

      .icon {
        @apply bg-primary rounded-full w-10 p-2 m-auto my-2;
      }

      .map {
        @apply w-full h-96 rounded-lg md:h-72;
      }

      .btn {
        @apply py-1 px-2 bg-primary rounded-lg text-secondary flex items-center gap-1 w-fit m-auto mt-2;

        &-icon {
          @apply animate-bounce w-5;
        }
      }
    }
  }
}
</style>
