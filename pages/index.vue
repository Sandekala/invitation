<template>
  <LayoutsCover v-model="isOpen" />
  <ClientOnly>
    <main v-if="isOpen">
      <BaseAudio />
      <SectionsHome id="target-home" />
      <BaseSeparator id="target-opening" />
      <SectionsOpening />
      <BaseSeparator />
      <SectionsStory />
      <BaseSeparatorLight id="target-event" />
      <SectionsEvent />
      <BaseSeparator />
      <SectionsWish />
      <BaseSeparator />
      <SectionsGift />
      <BaseSeparator id="target-moment" />
      <SectionsMoment />
      <BaseSeparatorLight />
      <SectionsEnd />
      <BaseSeparator />
      <LayoutsFooter />
      <!-- <LayoutsNavbar /> -->
    </main>
  </ClientOnly>
</template>

<script lang="ts" setup>
const isOpen = ref<boolean>(false)
onMounted(() => {
  scrollTo({ top: 0, behavior: 'smooth' })
})

</script>

<style lang="postcss" scoped>
</style>
