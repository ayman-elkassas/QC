<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <vs-alert>
              <template #title> Protocols </template>
              There is no protocols to show
            </vs-alert>
          </div>

          <div class="card-body">
            <vs-button primary @click="active = !active"
              ><i class="bx bx-plus"></i> Add Protocol</vs-button
            >
            <br />
            <div class="row">
              <div v-for="(col, index) in 6" :key="index" class="col-4">
                <ProtocolCard></ProtocolCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="center">
      <vs-dialog v-model="active">
        <template #header>
          <h4 class="not-margin">Add Protocol</h4>
        </template>
        <vs-row>
          <vs-col w="12">
            <h6>Timeline</h6>
            <VueDatePicker
              v-model="date"
              :min-date="minDate"
              :max-date="maxDate"
              placeholder="from ~ to"
              range
              range-header-text="From %d To %d"
              range-input-text="From %d To %d"
              validate
              no-header
            />
          </vs-col>
        </vs-row>
        <br />
        <vs-row>
          <vs-col w="12">
            <div class="form-group">
              <label class="form-label" for="basic-addon-name">Name</label>

              <input
                id="basic-addon-name"
                type="text"
                class="form-control"
                placeholder="Protocol Name"
                aria-label="Name"
                aria-describedby="basic-addon-name"
                required
              />
            </div>
            <div class="form-group">
              <label class="d-block" for="validationBioBootstrap"
                >Description</label
              >
              <textarea
                id="validationBioBootstrap"
                class="form-control"
                name="validationBioBootstrap"
                placeholder="Protocol Description"
                rows="3"
                required
              ></textarea>
            </div>
          </vs-col>
        </vs-row>
        <template #footer>
          <div class="footer-dialog">
            <vs-button block success> Add Protocol </vs-button>
            <div class="new">New Here? Create New Protocol</div>
          </div>
        </template>
      </vs-dialog>
    </div>
  </div>
</template>

<script>
import ProtocolCard from '@/components/protocol/ProtocolCard'

export default {
  name: 'Index',
  components: { ProtocolCard },
  layout: 'dashboard/home',
  data() {
    return {
      active: false,
      date: new Date(),
      currentDate: new Date(),
    }
  },
  computed: {
    minDate() {
      return new Date(
        this.currentDate.getFullYear() - 1,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      )
    },
    maxDate() {
      return new Date(
        this.currentDate.getFullYear() + 1,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      )
    },
  },
}
</script>

<style scoped>
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
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
