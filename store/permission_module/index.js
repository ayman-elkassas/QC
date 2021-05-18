const modulePermission = {
  state: () => ({
    SPermissions: [],
  }),
  actions: {
    async allPermissions(context) {
      await this.$axios
        .$get('/api/permissions/')
        .then((response) => {
          context.commit('permissions', response.data.reverse())
        })
        .catch((error) => {})
    },
    async addPermission(context, request) {
      await this.$axios.$post('/api/permissions/store/', request)
    },
  },
  mutations: {
    permissions(state, data) {
      return (state.SPermissions = data)
    },
  },
  getters: {
    getPermissions(state) {
      return state.SPermissions
    },
  },
}

export default modulePermission
