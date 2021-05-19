<template>
  <div>
    <vs-dialog v-model="$props.active">
      <template #header>
        <h4 class="not-margin">
          {{ $props.operationName }} <b>{{ $props.moduleName }}</b>
        </h4>
      </template>

      <div class="con-form">
        <vs-input
          v-model="request.name"
          label="Name"
          placeholder="Permission name"
        />
        <vs-row v-if="$props.operation === 1">
          <vs-col w="12">
            <br />
            <br />
            <vs-input
              v-model="request.group"
              value
              label="Group name"
              placeholder="Group name"
            />
          </vs-col>
        </vs-row>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button
            v-if="$props.operation === 1"
            block
            success
            :loading="submit"
            :disabled="!(request.name && request.group)"
            @click="addPermission()"
          >
            {{ submitName }}
          </vs-button>
          <vs-button
            v-else
            block
            :loading="submit"
            :disabled="!request.name"
            @click="_performEditing()"
          >
            {{ submitName }}
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogueOps',
  props: {
    // op:1 for add, op:2 for edit
    operation: { type: Number, default: 1, required: true },
    active: { type: Boolean, default: false, required: true },
    operationName: { type: String, default: '', required: true },
    moduleName: { type: String, default: '', required: true },
    submitName: { type: String, default: '', required: true },
    editItemId: { type: Number, default: 1 },
    dispatchCall: { type: String, default: '', required: true },
    dispatchRefresh: { type: String, default: '', required: true },
    instanceSaveRequest: { type: Object, default: { name: '', group: '' } },
  },
  data() {
    return {
      request: {
        name: '',
        group: '',
      },
      data: [],
      submit: false,
    }
  },
  watch: {
    active(newVal, oldVal) {
      this.$parent.activeP = newVal
    },
    instanceSaveRequest: {
      immediate: true,
      handler(newVal, oldVal) {
        this.request = { ...newVal }
      },
    },
  },
  methods: {
    addPermission() {
      this.submit = true
      if ((typeof this.request.name).match('string')) {
        if ((typeof this.request.group).match('string')) {
          this.$store
            .dispatch(this.$props.dispatchCall, this.request)
            .then((res) => {
              // reset
              this.reset()
              // refresh
              this.refreshData()

              this.openNotification(
                'bottom-right',
                'success',
                `<i class='bx bx-select-multiple' ></i>`,
                'Add New Permission Successfully',
                'User granted roles can add permissions'
              )
            })
            .catch((err) => {
              this.openNotification(
                'bottom-right',
                'primary',
                `<i class='bx bx-select-multiple' ></i>`,
                'Cannot Add Permission',
                'Please check endpoint'
              )
            })
        }
      }
    },
    _performEditing() {
      this.submit = true

      const payload = { id: this.editItemId, request: this.request }

      this.$store
        .dispatch(this.dispatchCall, payload)
        .then((res) => {
          // reset
          this.reset()
          // refresh
          this.refreshData()

          this.openNotification(
            'bottom-right',
            'primary',
            `<i class='bx bx-select-multiple' ></i>`,
            'Edit Permission Successfully',
            'User granted roles can add permissions'
          )
        })
        .catch((err) => {
          this.openNotification(
            'bottom-right',
            'primary',
            `<i class='bx bx-select-multiple' ></i>`,
            'Cannot Edit Permission',
            'Please check endpoint'
          )
        })
    },
    reset() {
      this.active = !this.active
      // reset parent active
      this.$parent.activeP = !this.$parent.activeP
      this.request.name = ''
      this.request.group = ''
      this.submit = false
    },
    refreshData() {
      this.$store.dispatch(this.$props.dispatchRefresh).then((r) => null)
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
</script>

<style scoped></style>
