// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools         : { enabled: true },
  modules          : [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-aos',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Dimas & Anggi',
      link : [
        {
          rel: 'icon', type: 'image/svg+xml', href: '/heart.svg',
        },
      ],
      meta: [
        { name: 'author', content: 'Sandekala' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        {
          hid: 'og:title', property: 'og:title', content: 'Dimas & Anggi',
        },
        {
          hid: 'og:description', property: 'og:description', content: 'Undangan Pernikahan',
        },
        {
          hid: 'og:type', property: 'og:type', content: 'article',
        },
        {
          hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dhx7fh9xc/image/upload/v1744740977/lm4nxo2taphwg980ukxm.jpg',
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://www.dimas-anggi.my.id/',
        },
        {
          hid: 'og:site:name', property: 'og:site:name', content: 'Dimas & Anggi',
        },
        { name: 'twitter:title', content: 'Dimas & Anggi' },
        { name: 'twitter:description', content: 'Undangan Pernikahan' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dhx7fh9xc/image/upload/v1744740977/lm4nxo2taphwg980ukxm.jpg' },
      ],
    },
  },
  postcss: {
    plugins: {
      'tailwindcss'        : {},
      'autoprefixer'       : {},
      'tailwindcss/nesting': {},
    },
  },
  pinia        : { storesDirs: ['./stores/**'] },
  runtimeConfig: { public: { idInvitation: '' } },
  aos          : { once: true },
})
