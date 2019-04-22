const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'xpaperchallenge.org - 論文完全読破チャレンジ',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'keywords',
        content:
          'nlpaper.challenge, cvpaper.challenge, nlp, natural language processing, paper, challenge, computer vision, xpaperchallenge'
      },
      {
        name: 'description',
        content: '論文完全読破チャレンジ。'
      },
      {
        name: 'author',
        content: 'xpaperchallenge.org'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'xpaperchallenge.org'
      },
      {
        property: 'og:title',
        content: 'xpaperchallenge.org - 論文完全読破チャレンジ'
      },
      {
        property: 'og:description',
        content: '論文完全読破チャレンジ。'
      },
      {
        property: 'og:image',
        content: 'http://xpaperchallenge.org/image/logo.jpg'
      },
      {
        property: 'og:url',
        content: 'http://xpaperchallenge.org'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
