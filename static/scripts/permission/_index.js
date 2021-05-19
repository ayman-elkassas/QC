export default {
  name: 'Permission',
  layout: 'dashboard/home',
  data: () => ({
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
    ops: 1,
    activeP: false,
    activeDelete: false,
    operationName: '',
    editItemId: 1,
    moduleName: 'Permission',
    submitName: '',
    dispatchCall: '',
    dispatchRefresh: 'allPermissions',
    instanceSaveReq: {},
    deleteItemId: 1,
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
    openAdd() {
      this.ops = 1
      this.activeP = !this.activeP
      this.operationName = 'Add'
      this.dispatchCall = 'addPermission'
      this.submitName = this.operationName + ' ' + this.moduleName
      this.instanceSaveReq = { name: '', group: '' }
    },
    async openEdit(id) {
      this.editItemId = id
      await this.instanceSave()
      this.ops = 2
      this.activeP = !this.activeP
      this.operationName = 'Edit'
      this.submitName = this.operationName + ' ' + this.moduleName
      this.dispatchCall = 'editPermission'
    },
    instanceSave() {
      const item = this.data.find((x) => x.id === this.editItemId)
      const { name, group } = item
      this.instanceSaveReq = { name, group }
    },
    openDelete(id) {
      this.deleteItemId = id
      this.activeDelete = !this.activeDelete
      this.dispatchCall = 'deletePermission'
    },
  },
}
