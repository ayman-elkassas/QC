<template>
  <div
    class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static"
    data-open="click"
    data-menu="vertical-menu-modern"
    data-col="blank-page"
  >
    <!-- BEGIN: Content-->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper">
        <div class="content-header row"></div>
        <div class="content-body">
          <div class="auth-wrapper auth-v2">
            <div class="auth-inner row m-0">
              <!-- Brand logo--><a
                class="brand-logo"
                href="javascript:void(0);"
              >
                <h2 class="brand-text text-primary ml-1">Qsee</h2>
              </a>
              <!-- /Brand logo-->
              <!-- Left Text-->
              <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div
                  class="w-100 d-lg-flex align-items-center justify-content-center px-5"
                >
                  <img
                    class="img-fluid"
                    src="~static/home/dashboard/app-assets/images/pages/login-v2.svg"
                    alt="Login V2"
                  />
                </div>
              </div>
              <!-- /Left Text-->

              <!-- Login-->
              <div
                class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5"
              >
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                  <h2 class="card-title font-weight-bold mb-1">
                    Welcome to {{ $get('AppName') }} 👋
                  </h2>
                  <p class="card-text mb-2">
                    Please sign-in to your account and start the adventure
                  </p>
                  <br />
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      w="12"
                    >
                      <vs-input
                        v-model="request.email"
                        required
                        autofocus
                        label="Email address"
                        placeholder="name@neoxero.com"
                        style="max-width: 100%"
                      >
                        <template v-if="validEmail" #message-success>
                          Email Valid
                        </template>
                        <template
                          v-if="!validEmail && request.email !== ''"
                          #message-danger
                        >
                          Email Invalid
                        </template>
                      </vs-input>
                    </vs-col>
                  </vs-row>
                  <br />
                  <br />
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      w="12"
                    >
                      <vs-input
                        v-model="request.password"
                        type="password"
                        label="Password Account"
                        placeholder="password"
                        :progress="getProgress"
                      >
                        <template v-if="getProgress >= 100" #message-success>
                          Secure password
                        </template>

                        <template v-if="getProgress < 40" #message-danger>
                          A special character-More than 6 digits-One lower case
                          letter-An uppercase letter-A number
                        </template>
                      </vs-input>
                    </vs-col>
                  </vs-row>
                  <br />
                  <vs-checkbox v-model="option"> Remember me </vs-checkbox>
                  <br />

                  <vs-button block :disabled="!activeSignIn" @click="login()">
                    Sign in
                  </vs-button>

                  <p class="text-center mt-2">
                    <span>New on our platform?</span>
                    <nuxt-link to="/auth/register"
                      ><span>&nbsp;Create an account</span></nuxt-link
                    >
                  </p>
                </div>
              </div>
              <!-- /Login-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Content-->
  </div>
</template>

<script src="../../static/scripts/auth/login.js"></script>

<style scoped>
@import '~static/home/dashboard/app-assets/css/plugins/forms/form-validation.css';
@import '~static/home/dashboard/app-assets/css/pages/page-auth.css';

* {
  font-size: 14px;
}
</style>
