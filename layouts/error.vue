<template>
  <div>
    <div class="content-body">
      <!-- Error page-->
      <div class="misc-wrapper">
        <div class="misc-inner p-2 p-sm-3">
          <div class="w-100 text-center">
            <h2 v-if="error.statusCode === 404" class="mb-1">
              Page Not Found 🕵🏻‍♀️
            </h2>
            <h2 v-else class="mb-1">An error occurred 🕵🏻‍♀️</h2>
            <p class="mb-2">
              Oops! 😖 The requested URL was not found on this server.
            </p>
            <no-ssr>
              <a class="btn btn-primary mb-2 btn-sm-block" @click="redirect()"
                >Back to home</a
              >
            </no-ssr>

            <img
              class="img-fluid"
              src="~static/home/dashboard/app-assets/images/pages/error.svg"
              alt="Error page"
            />
          </div>
        </div>
      </div>
      <!-- / Error page-->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
  methods: {
    redirect() {
      window.location = '/'
    },
  },
}
</script>
<style scoped>
@import '~static/home/dashboard/app-assets/css/pages/page-misc.min.css';
</style>
