export default {
  name: 'Index',
  layout: 'dashboard/home',
  data() {
    return {
      progress: 0,
      color: '#7a76cb',
      active: false,
      interval: null,
      loading: null,
      user: this.$auth.user,
    }
  },
  head() {},
  created() {},
  mounted() {
    if (process.client && localStorage.getItem('welcome')) {
      if (localStorage.getItem('welcome').match('1')) {
        // welcome notification
        this.openNotification(5000)
        localStorage.removeItem('welcome')
      }
    }
  },
  methods: {
    openNotification(duration) {
      this.$vs.notification({
        duration,
        progress: 'auto',
        border: 'primary',
        title: 'Welcome ' + this.user.full_name,
        text: `managing a task through its life cycle. It involves planning,
         testing, tracking, and reporting`,
      })
    },
  },
}
