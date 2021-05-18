export default {
  name: 'Permission',
  layout: 'dashboard/home',
  data: () => ({
    active: false,
    search: '',
    allCheck: false,
    page: 1,
    max: 10,
    selected: [],
    request: {
      name: '',
      group: '',
    },
    data: [],
  }),
  beforeCreate() {
    this.$store.dispatch('allPermissions')
  },
  mounted() {},
  computed: {
    getPermissions() {
      // todo:last step render value to component
      const permissions = this.$store.getters.getPermissions
      if (!(permissions.length > 0)) return []
      this.data = permissions
      return permissions
    },
  },
  methods: {
    addPermission() {
      if (
        (typeof this.request.name).match('string') &&
        (typeof this.request.group).match('string')
      ) {
        this.$store.dispatch('addPermission', this.request).then((res) => {
          this.active = !this.active
          this.$store.dispatch('allPermissions').then((r) => null)
          this.openNotification(
            'bottom-right',
            'success',
            `<i class='bx bx-select-multiple' ></i>`,
            'Add New Permission Successfully',
            'User granted roles can add permissions'
          )
        })
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
  },
}
