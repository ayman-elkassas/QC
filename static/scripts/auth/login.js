export default {
  name: 'Login',
  methods: {
    redirect() {
      // when auth $axios login Api
      // this.$router.push({ path: '/' })

      // now
      window.location = '/'
    },
  },
}
