export default defineNuxtPlugin(async () => {
  const { brides, mariage, assets } = storeToRefs(useDataStore())

  await useFetch('/api/brides', {
    onResponse: ({ response }) => {
      const data = response._data
      if ((data || []).length > 0) brides.value = data[0]
    },
  })
  await useFetch('/api/mariage', {
    onResponse: ({ response }) => {
      const data = response._data
      if ((data || []).length > 0) mariage.value = data[0]
    },
  })
  await useFetch('/api/assets', {
    onResponse: ({ response }) => {
      const data = response._data
      if ((data || []).length > 0) assets.value = data[0]
    },
  })
})
