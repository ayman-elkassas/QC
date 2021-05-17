export default {
  name: 'HomeHeader',
  data: () => ({
    active: 'guide',
  }),
  methods: {
    logout() {
      this.$auth.logout().then((r) => window.location.reload())
    },
  },
}
