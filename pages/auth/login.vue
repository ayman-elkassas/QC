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
                  <div class="form-group">
                    <label class="form-label" for="login-email">Email</label>
                    <input
                      id="login-email"
                      class="form-control"
                      type="text"
                      name="login-email"
                      placeholder="name@example.com"
                      aria-describedby="login-email"
                      autofocus=""
                      tabindex="1"
                      v-model="request.email"
                    />
                  </div>
                  <div class="form-group">
                    <div class="d-flex justify-content-between">
                      <label for="login-password">Password</label
                      ><a href="page-auth-forgot-password-v2.html"
                        ><small>Forgot Password?</small></a
                      >
                    </div>
                    <div
                      class="input-group input-group-merge form-password-toggle"
                    >
                      <input
                        id="login-password"
                        class="form-control form-control-merge"
                        type="password"
                        name="login-password"
                        placeholder="············"
                        aria-describedby="login-password"
                        tabindex="2"
                        v-model="request.password"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text cursor-pointer"
                          ><i data-feather="eye"></i
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        id="remember-me"
                        class="custom-control-input"
                        type="checkbox"
                        tabindex="3"
                      />
                      <label class="custom-control-label" for="remember-me">
                        Remember Me</label
                      >
                    </div>
                  </div>
                  <button
                    class="btn btn-primary btn-block"
                    tabindex="4"
                    @click="login()"
                  >
                    Sign In
                  </button>
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
