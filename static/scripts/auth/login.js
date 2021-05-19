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
      percent: 0,
      option: true,
    }
  },
  computed: {
    validEmail() {
      this.emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.request.email
      )
      return this.emailValid
    },
    getProgress() {
      let progress = 0

      // at least one number

      if (/\d/.test(this.request.password)) {
        progress += 20
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.request.password)) {
        progress += 20
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.request.password)) {
        progress += 20
      }

      // more than 5 digits

      if (this.request.password.length >= 6) {
        progress += 20
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.request.password)) {
        progress += 20
      }

      this.passwordValid = progress
      return progress
    },
    activeSignIn() {
      return this.validEmail && this.getProgress > 30
    },
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

            // welcome screen
            localStorage.setItem('welcome', '1')

            this.loading.close()
            clearInterval(this.interval)
            this.percent = 0

            this.redirect()
          } else {
            this.openNotification(
              'bottom-right',
              'danger',
              `<i class='bx bx-select-multiple' ></i>`,
              'Token is set in wrong way',
              'New User added with roles and permissions'
            )
          }
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
