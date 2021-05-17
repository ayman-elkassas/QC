<template>
  <div>
    <!--          content body layout home-->
    <div class="row">
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          <div class="alert-body">
            <strong>Info:</strong> This layout can be useful for getting started
            with empty content section. Please check the&nbsp;<a
              class="text-primary"
              href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-empty.html"
              target="_blank"
              >Layout empty documentation</a
            >&nbsp; for more details.
          </div>
        </div>
      </div>
    </div>
    <section id="dashboard-analytics">
      <div class="row match-height">
        <!-- Greetings Card starts -->
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card card-congratulations">
            <div class="card-body text-center">
              <img
                src="~static/home/dashboard/app-assets/images/elements/decore-left.png"
                class="congratulations-img-left"
                alt="card-img-left"
              />
              <img
                src="~static/home/dashboard/app-assets/images/elements/decore-right.png"
                class="congratulations-img-right"
                alt="card-img-right"
              />
              <div class="avatar avatar-xl bg-primary shadow">
                <div class="avatar-content">
                  <i class="bx bx-user"></i>
                </div>
              </div>
              <div class="text-center">
                <h1 class="mb-1 text-white">Congratulations John,</h1>
                <p class="card-text m-auto w-75">
                  You have done <strong>57.6%</strong> more sales today. Check
                  your new badge in your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Greetings Card ends -->

        <!-- Subscribers Chart Card starts -->
        <div class="col-lg-3 col-sm-6 col-12">
          <div class="card">
            <div class="card-header flex-column align-items-start pb-0">
              <div class="avatar bg-light-primary p-50 m-0">
                <div class="avatar-content">
                  <i data-feather="users" class="font-medium-5"></i>
                </div>
              </div>
              <h2 class="font-weight-bolder mt-1">92.6k</h2>
              <p class="card-text">Subscribers Gained</p>
            </div>
            <div id="gained-chart"></div>
          </div>
        </div>
        <!-- Subscribers Chart Card ends -->

        <!-- Orders Chart Card starts -->
        <div class="col-lg-3 col-sm-6 col-12">
          <div class="card">
            <div class="card-header flex-column align-items-start pb-0">
              <div class="avatar bg-light-warning p-50 m-0">
                <div class="avatar-content">
                  <i data-feather="package" class="font-medium-5"></i>
                </div>
              </div>
              <h2 class="font-weight-bolder mt-1">38.4K</h2>
              <p class="card-text">Orders Received</p>
            </div>
            <div id="order-chart"></div>
          </div>
        </div>
        <!-- Orders Chart Card ends -->
      </div>
    </section>
    <!-- Dashboard Analytics end -->
    <section id="dashboard-ecommerce">
      <div class="row match-height">
        <!-- Medal Card -->
        <div class="col-xl-4 col-md-6 col-12">
          <div class="card card-congratulation-medal">
            <div class="card-body">
              <h5>Congratulations 🎉 John!</h5>
              <p class="card-text font-small-3">You have won gold medal</p>
              <h3 class="mb-75 mt-2 pt-50">
                <a href="javascript:void(0);">$48.9k</a>
              </h3>
              <button type="button" class="btn btn-primary">View Sales</button>
              <img
                src="~static/home/dashboard/app-assets/images/illustration/badge.svg"
                class="congratulation-medal"
                alt="Medal Pic"
              />
            </div>
          </div>
        </div>
        <!--/ Medal Card -->

        <!-- Statistics Card -->
        <div class="col-xl-8 col-md-6 col-12">
          <div class="card card-statistics">
            <div class="card-header">
              <h4 class="card-title">Statistics</h4>
              <div class="d-flex align-items-center">
                <p class="card-text font-small-2 mr-25 mb-0">
                  Updated 1 month ago
                </p>
              </div>
            </div>
            <div class="card-body statistics-body">
              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                  <div class="media">
                    <div class="avatar bg-light-primary mr-2">
                      <div class="avatar-content">
                        <i data-feather="trending-up" class="avatar-icon"></i>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">230k</h4>
                      <p class="card-text font-small-3 mb-0">Sales</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                  <div class="media">
                    <div class="avatar bg-light-info mr-2">
                      <div class="avatar-content">
                        <i data-feather="user" class="avatar-icon"></i>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">8.549k</h4>
                      <p class="card-text font-small-3 mb-0">Customers</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                  <div class="media">
                    <div class="avatar bg-light-danger mr-2">
                      <div class="avatar-content">
                        <i data-feather="box" class="avatar-icon"></i>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">1.423k</h4>
                      <p class="card-text font-small-3 mb-0">Products</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="media">
                    <div class="avatar bg-light-success mr-2">
                      <div class="avatar-content">
                        <i data-feather="dollar-sign" class="avatar-icon"></i>
                      </div>
                    </div>
                    <div class="media-body my-auto">
                      <h4 class="font-weight-bolder mb-0">$9745</h4>
                      <p class="card-text font-small-3 mb-0">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/ Statistics Card -->
      </div>
    </section>
    <!-- Dashboard Ecommerce ends -->
    <!-- END: Content-->
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'dashboard/home',
  data() {
    return {
      progress: 0,
      color: '#7a76cb',
    }
  },
  head() {},
  created() {
    if (!process.server) {
      // this.openLoading()
    }
  },
  mounted() {},
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        progress: this.progress,
        background: this.color,
        color: '#fff',
      })
      const interval = setInterval(() => {
        if (this.progress <= 100) {
          loading.changeProgress(`${this.progress++}%`)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.progress = 0
      }, 4100)
    },
  },
}
</script>

<style scoped></style>
