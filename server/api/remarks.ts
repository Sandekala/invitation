import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const url      = process.env.NUXT_API_BASE_URL as string
  const key      = process.env.NUXT_API_KEY as string
  const supabase = createClient(url, key)
  const config   = useRuntimeConfig()

  const { data } = await supabase.from('remarks').select('*').eq('brides_id', config.public.idInvitation).order('created_at', { ascending: false })
  return data
})
