import { useSound } from '@vueuse/sound'
import type {
  IBrides, IMariage, IAssets,
} from '~/interfaces'

import backsound from '@/assets/backsound.mp4'

export const useDataStore = defineStore('data', () => {
  const { play, pause, isPlaying } = useSound(backsound)

  const toglePlay = () => {
    isPlaying.value ? pause() : play({ forceSoundEnabled: true })
  }

  const brides  = ref<IBrides>()
  const mariage = ref<IMariage>()
  const assets  = ref<IAssets>()

  return {
    brides, mariage, assets, isPlaying, toglePlay,
  }
})
