export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // mode:'spa',
  // render:{
  //   ssr:false
  // },
  head: {
    title: 'Quality Management',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class:
        'vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static',
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
      { src: '/home/dashboard/app-assets/vendors/js/vendors.min.js'},
      { src: '/home/dashboard/app-assets/js/core/app-menu.js'},
      { src: '/home/dashboard/app-assets/js/core/app.js'},
      { src: '/home/dashboard/feather.js'},
    ],
  },

  serverMiddleware:[
    //{path:'/',handler:'~/server_middleware/routes/trailingSlashRedirect.js'}
  ],

  env:{
  },

  router: {
    // trailingSlash: false,
    // middleware: 'routes/trailingSlashRedirect',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',

    // todo:home assets
    { src: '~assets/dashboard/app-assets/vendors/css/vendors.min.css' },

    //todo:home static
    { src: '~static/home/dashboard/assets/css/style.css' },
    { src: '~static/home/dashboard/app-assets/css/bootstrap.css' },
    { src: '~static/home/dashboard/app-assets/css/bootstrap-extended.css' },
    { src: '~static/home/dashboard/app-assets/css/colors.css' },
    { src: '~static/home/dashboard/app-assets/css/components.css' },
    {src: '~static/home/dashboard/app-assets/css/core/menu/menu-types/vertical-menu.css'},
    {src: '~static/home/dashboard/app-assets/css/themes/semi-dark-layout.css'},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vendors.min.js', mode: 'client' },
    '@/plugins/vuesax',
    '@/plugins/datepicker',
    '@/plugins/avatar-generator',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {fix: true}],
    ['@nuxtjs/tailwindcss'],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // With options
    // 'nuxt-trailingslash-module',
    [
      'nuxt-global-var',
      {
        data: {
          AppName:'Quality Management',
          info:'Enable auto-login on this browser and speed through checkout every time',
          PREFIX: 'http://127.0.0.1:8000/storage',
        }
      }
    ]
  ],
  //todo: this is right way auth syntax
  auth:{
    strategies:{
      'laravelJWT':{
        provider: 'users',
        url: '/api',
        endpoints:{
          login:{url:"/auth/login/",method:'post',propertyName:'false'},
          user: { url: '/auth/user/', method: 'get', propertyName: 'false' },
          logout: { url: '/auth/logout/', method: 'post',propertyName: 'false' }
        },
        token: {
          property: 'token',
          maxAge: 10080
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      }
    },
    redirect:{
      login:'/auth/login/',
      home:'/'
    },
    fullPathRedirect: true,
    rewriteRedirects: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:"http://127.0.0.1:8000",
    // baseURL:"https://Qsee-Server.herokuapp.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    extractCSS:true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
}
