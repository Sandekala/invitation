import { createClient } from '@supabase/supabase-js'
import { IRemark } from '~/interfaces'

export default defineEventHandler(async (event) => {
  const url      = process.env.NUXT_API_BASE_URL as string
  const key      = process.env.NUXT_API_KEY as string
  const supabase = createClient(url, key)
  const config   = useRuntimeConfig()
  const body     = await readBody(event) as IRemark

  const { data, error } = await supabase
    .from('remarks')
    .insert([{ brides_id: config.public.idInvitation, ...body }])
    .select()

  return error ?? data
})
