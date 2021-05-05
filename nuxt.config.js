export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'QC',
    htmlAttrs: {
      lang: 'en',
      class:'loading semi-dark-layout',
      dataLayout:'semi-dark-layout',


    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {src: "home/dashboard/app-assets/vendors/js/vendors.min.js"},
      {src: "home/dashboard/app-assets/js/core/app-menu.js"},
      {src: "home/dashboard/app-assets/js/core/app.js"},

      {src: "home/dashboard/feather.js"},

      //page:
      {src: "home/dashboard/app-assets/js/scripts/pages/dashboard-analytics.js"},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',

    //todo:home assets
    {src:'~assets/dashboard/app-assets/vendors/css/vendors.min.css'},

    {src:'~static/home/dashboard/assets/css/style.css'},
    {src:'~static/home/dashboard/app-assets/css/bootstrap.css'},
    {src:'~static/home/dashboard/app-assets/css/bootstrap-extended.css'},
    {src:'~static/home/dashboard/app-assets/css/colors.css'},
    {src:'~static/home/dashboard/app-assets/css/components.css'},
    {src:'~static/home/dashboard/app-assets/css/core/menu/menu-types/vertical-menu.min.css'},
    {src:'~static/home/dashboard/app-assets/css/themes/semi-dark-layout.css'},

    //page:
    {src:'~static/home/dashboard/app-assets/css/plugins/charts/chart-apex.css'},

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
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
