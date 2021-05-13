export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Qsee',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class:
        'vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static',
      'data-open': 'click',
      'data-menu': 'vertical-menu-modern',
      'data-col': '2-columns',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'home/dashboard/app-assets/vendors/js/vendors.min.js' },
      { src: 'home/dashboard/app-assets/js/core/app-menu.js' },
      { src: 'home/dashboard/app-assets/js/core/app.js' },
      { src: 'home/dashboard/app-assets/js/scripts/pages/app-todo.min.js' },
      { src: 'home/protocol/js/swap-animation.js' },
      { src: 'home/protocol/js/draggable.bundle.legacy.js' },

      { src: 'home/dashboard/feather.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',

    // todo:home assets
    { src: '~assets/dashboard/app-assets/vendors/css/vendors.min.css' },

    { src: '~static/home/dashboard/assets/css/style.css' },
    { src: '~static/home/dashboard/app-assets/css/bootstrap.css' },
    { src: '~static/home/dashboard/app-assets/css/bootstrap-extended.css' },
    { src: '~static/home/dashboard/app-assets/css/colors.css' },
    { src: '~static/home/dashboard/app-assets/css/components.css' },
    {
      src:
        '~static/home/dashboard/app-assets/css/core/menu/menu-types/vertical-menu.css',
    },
    {
      src: '~static/home/dashboard/app-assets/css/themes/semi-dark-layout.css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax', '@/plugins/datepicker'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    ['@nuxtjs/tailwindcss'],
    ['@nuxtjs/device'],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
