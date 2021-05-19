<template>
  <div>
    <vs-dialog v-model="$props.active" width="550px" not-center>
      <template #header>
        <h4 class="not-margin">
          Are you sure <b>{{ $props.moduleName }}</b>
        </h4>
      </template>

      <div class="con-content">
        <p>Delete {{ $props.moduleName }} permanently?</p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button :loading="submit" danger @click="performDelete()">
            Delete
          </vs-button>
          <vs-button dark transparent @click="$props.active = false">
            Cancel
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogueDelete',
  props: {
    // op:1 for add, op:2 for edit
    active: { type: Boolean, default: false, required: true },
    moduleName: { type: String, default: '', required: true },
    deleteItemId: { type: Number, default: 1 },
    dispatchCall: { type: String, default: '', required: true },
    dispatchRefresh: { type: String, default: '', required: true },
  },
  data() {
    return {
      submit: false,
    }
  },
  watch: {
    active(newVal, oldVal) {
      this.$parent.activeDelete = newVal
    },
  },
  methods: {
    performDelete() {
      this.submit = true
      this.$store
        .dispatch(this.$props.dispatchCall, this.deleteItemId)
        .then((res) => {
          // reset
          this.reset()
          // refresh
          this.refreshData()

          this.openNotification(
            'bottom-right',
            'danger',
            `<i class='bx bx-select-multiple' ></i>`,
            'Delete Permission Successfully',
            'User granted roles can add permissions'
          )
        })
        .catch((err) => {
          this.openNotification(
            'bottom-right',
            'primary',
            `<i class='bx bx-select-multiple' ></i>`,
            'Cannot Delete Permission',
            'Please check endpoint'
          )
        })
    },
    reset() {
      this.active = !this.active
      // reset parent active
      this.$parent.activeDelete = !this.$parent.activeDelete
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

<style scoped>
.con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.con-footer .vs-button {
  margin: 0px;
}
.con-footer .vs-button .vs-button__content {
  padding: 10px 30px;
}
.con-footer .vs-button ~ .vs-button {
  margin-left: 10px;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}
.con-content {
  width: 100%;
}
.con-content p {
  font-size: 0.8rem;
  padding: 0px 10px;
}
.con-content .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-content .vs-input-parent {
  width: 100%;
}
.con-content .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-content .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}
</style>
