<template>
  <LayoutsContainer>
    <div class="wish">
      <h1 data-aos="fade-up">
        Doa & Ucapan
      </h1>
      <form data-aos="fade-up" data-aos-delay="300" @submit.prevent="handleSubmit">
        <div>
          <input v-model="payload.name" placeholder="Masukkan nama anda" type="text" :class="{'error': v$.name?.$errors.length > 0}">
          <div v-for="error of v$.name?.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div>
          <textarea v-model="payload.prayer" placeholder="Masukkan doa dan ucapan anda" :class="{'error': v$.prayer?.$errors.length > 0}" />
          <div v-for="error of v$.prayer?.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div>
          <select v-model="payload.attendance">
            <option :value="true">
              Hadir
            </option>
            <option :value="false">
              Tidak Hadir
            </option>
          </select>
          <div v-for="error of v$.attendance?.$errors" :key="error.$uid" class="input-errors">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <button type="submit" :disabled="isDisabled" data-aos="zoom-in">
          Kirim
          <BaseSpinner v-if="isLoading" />
        </button>
      </form>
      <div class="remark" data-aos="fade-up" data-aos-delay="300">
        <template v-for="remark in remarks" :key="remark.name">
          <div class="remark-item">
            <p class="name">
              {{ remark.name }} <span><img src="@/assets/icons/check.svg" alt="check">{{ remark.attendance ? 'Hadir' : 'Tidak Hadir' }}</span>
            </p>
            <p>{{ remark.prayer }}</p>
          </div>
        </template>
      </div>
    </div>
  </LayoutsContainer>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import {
  required, maxLength, helpers,
} from '@vuelidate/validators'
import type { IRemark } from '~/interfaces'

const route     = useRoute()
const remarks   = ref<IRemark[]>([])
const isLoading = ref<boolean>(false)
const payload   = reactive<IRemark>({
  name      : String(route.query.to || ''),
  prayer    : '',
  attendance: true,
})
const rules     = {
  name  : { required: helpers.withMessage('Siapa nih yang mau ngasih ucapan :)', required), maxLength: helpers.withMessage('Nama tidak boleh lebih dari 30 karakter', maxLength(30)) },
  prayer: { required: helpers.withMessage(`Ucapannya mana? hehe :)`, required) },
}

const v$ = useVuelidate(rules, payload, { $autoDirty: true })

const isDisabled = computed(() => v$.value?.$invalid || isLoading.value)

const handleSubmit = async (): Promise<void> => {
  isLoading.value = true
  if (sessionStorage.getItem('has-submit') !== 'true') {
    await useFetch('/api/remark', {
      body      : payload,
      method    : 'POST',
      watch     : false,
      onResponse: ({ response }) => {
        if (!response.ok) return
        sessionStorage.setItem('has-submit', 'true')
      },
    })
  }
  await execute()
  isLoading.value = false
  payload.name    = ''
  payload.prayer  = ''
}

const { execute } = await useFetch('/api/remarks', {
  immediate : true,
  server    : false,
  onResponse: ({ response }) => {
    if (!response.ok) return
    remarks.value = response._data
  },
})

</script>

<style lang="postcss" scoped>
.wish {
  @apply text-center text-primary mt-10;

  h1 {
    @apply font-Tangerine text-5xl mb-4 font-extrabold;
  }

  form {
    @apply flex flex-col gap-4;

    > div {
      @apply flex flex-col text-left indent-1;
    }

    input,
    textarea,
    select {
      @apply p-2 rounded-lg border border-primary bg-white outline-none appearance-none;

      &:focus-visible {
        @apply outline-none;
      }

      &.error {
        @apply border-red-500;
      }
    }

    button {
      @apply flex items-center gap-2 py-1 px-12 rounded border border-primary w-fit m-auto hover:scale-110 hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer;

      &:disabled {
        @apply hover:cursor-not-allowed hover:scale-100 hover:bg-transparent hover:text-primary;
      }
    }
  }

  .remark {
    @apply mt-6 max-h-96 py-4 px-2 overflow-y-auto;

    &-item {
      @apply bg-white min-h-10 w-full rounded-lg relative p-2 text-left mb-2 shadow break-all;

      &::after {
        content: "";
        position: absolute;
        left: -16px;
        top: 19px;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-right-color: #FFF;
        z-index: 10;
      }

      .name {
        @apply flex items-center gap-2 text-xs;

        span {
          @apply bg-primary text-secondary flex items-center gap-2 rounded px-2 py-1;

          img {
            @apply w-3;
          }
        }
      }
    }
  }
}
</style>
