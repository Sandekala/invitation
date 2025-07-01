<template>
  <LayoutsContainerBrown>
    <div class="story">
      <div class="story-pray">
        <h2 data-aos="fade-up">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </h2>
        <p data-aos="fade-up">
          " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir. "
        </p>
        <p data-aos="fade-up">
          ( Q.S. Ar-Rum: 21 )
        </p>
      </div>
      <div class="story-line">
        <h2 data-aos="fade-up">
          Kisah Cinta Kita
        </h2>

        <div>
          <template v-for="(value, key) in mariage?.story_line" :key>
            <template v-if="assets?.[key as keyof IAssets]">
              <div class="story-line-wrap">
                <div class="story-line-progress">
                  <img src="@/assets/icons/heart.svg">
                  <div />
                  <template v-if="key == 'engaged'">
                    <div class="bottom" />
                  </template>
                </div>
                <div>
                  <h2>{{ getDate(value, 'MMMM yyyy') }}</h2>
                  <BaseCard data-aos="flip-right">
                    <div class="photo">
                      <p>
                        {{ defineTitle(key) }}
                      </p>
                      <div class="frame">
                        <img :src="(assets?.[key as keyof IAssets] as string)" alt="photo">
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </LayoutsContainerBrown>
</template>

<script lang="ts" setup>
import type { IAssets } from '~/interfaces'

const { mariage, assets } = storeToRefs(useDataStore())

const defineTitle = (key: string): string => {
  const matrix = {
    first_meet     : 'Pertama bertemu',
    in_relationship: 'Menjalin hubungan',
    engaged        : 'Lamaran',
  }
  return matrix[key as keyof typeof matrix]
}
</script>

<style lang="postcss" scoped>
.story {
  @apply text-secondary;

  &-pray {
    @apply text-center;

    > h2 {
      @apply font-Amiri text-xl leading-10;
    }

    > p {
      @apply italic;

      &:first-of-type {
        @apply my-10;
      }
    }
  }

  &-line {
    @apply relative pb-8 pt-24;

    > h2 {
      @apply font-Tangerine text-3xl text-center font-extrabold;
    }

    > div {
      @apply mt-8;
    }

    &-wrap {
      @apply flex items-stretch gap-1 w-fit m-auto;

      h2 {
        @apply mb-4 mt-1;
      }

      > div:last-of-type {
        @apply flex flex-col flex-grow;

        .photo {
          @apply p-4 w-56 sm:w-72 lg:w-96 h-[320px] flex flex-col items-start justify-center;

          .frame {
            @apply h-[250px] m-auto;

            > img {
              @apply object-cover h-full rounded;
            }
          }

          > p {
            @apply font-bold mb-4;
          }
        }
      }
    }

    &-progress {
      @apply relative flex items-center flex-col w-8;

      .bottom {
        @apply rounded-full w-5 h-5 bg-light -mt-1;
      }

      > img {
        @apply h-8 w-8 object-cover;
      }
      > div:first-of-type {
        @apply h-[360px] w-2 bg-light;
      }
    }
  }
}
</style>
