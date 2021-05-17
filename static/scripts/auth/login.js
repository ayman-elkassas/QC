export default {
  name: 'Login',
  middleware: 'auth/authenticate',
  // middleware: 'auth',
  data() {
    return {
      request: {
        email: '',
        password: '',
      },
      active: false,
      color: '#7a76cb',
      token: '',
      provider: '',
      percent: 0,
    }
  },
  methods: {
    async login() {
      this.loading = this.$vs.loading({
        progress: this.percent,
        background: this.color,
        color: '#fff',
      })

      this.interval = setInterval(() => {
        if (this.percent <= 100) {
          this.loading.changePercent(`${this.percent++}%`)
        }
      }, 40)

      try {
        await this.$axios.$post(`api/auth/login`, this.request).then((res) => {
          if (typeof res.data.token !== 'undefined') {
            this.$auth.setUserToken(res.data.token, true)
          }

          this.openNotification(
            'bottom-right',
            'success',
            `<i class='bx bx-select-multiple' ></i>`,
            'Login Successfully',
            'New User added with rules and permissions'
          )

          this.loading.close()
          clearInterval(this.interval)
          this.percent = 0

          window.location = '/'
        })
      } catch (e) {
        this.openNotification(
          'top-left',
          'danger',
          `<i class='bx bxs-bug' ></i>`,
          'Check Inputs',
          'Username or password not matched with account credentials,' +
            'make sure and try again...'
        )
        this.loading.close()
        clearInterval(this.interval)
        this.percent = 0
      }
    },
    openNotification(position = null, border, icon, title, text) {
      this.$vs.notification({
        border,
        icon,
        progress: 'auto',
        position,
        title,
        text,
      })
    },
    redirect() {
      // now
      window.location = '/'
    },
  },
}
