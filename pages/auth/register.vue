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
              <!-- Register-->
              <div
                class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5"
              >
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                  <h2 class="card-title font-weight-bold mb-1">
                    Adventure starts here 🚀
                  </h2>
                  <p class="card-text mb-2">
                    Make your app management easy and fun!
                  </p>
                  <div class="auth-register-form mt-2">
                    <div class="form-group">
                      <label class="form-label" for="register-username"
                        >Username</label
                      >
                      <input
                        id="register-username"
                        class="form-control"
                        type="text"
                        name="register-username"
                        placeholder="johndoe"
                        aria-describedby="register-username"
                        autofocus=""
                        tabindex="1"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="register-email"
                        >Email</label
                      >
                      <input
                        id="register-email"
                        class="form-control"
                        type="text"
                        name="register-email"
                        placeholder="john@example.com"
                        aria-describedby="register-email"
                        tabindex="2"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="register-password"
                        >Password</label
                      >
                      <div
                        class="input-group input-group-merge form-password-toggle"
                      >
                        <input
                          id="register-password"
                          class="form-control form-control-merge"
                          type="password"
                          name="register-password"
                          placeholder="············"
                          aria-describedby="register-password"
                          tabindex="3"
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
                          id="register-privacy-policy"
                          class="custom-control-input"
                          type="checkbox"
                          tabindex="4"
                        />
                        <label
                          class="custom-control-label"
                          for="register-privacy-policy"
                          >I agree to<a href="javascript:void(0);"
                            >&nbsp;privacy policy & terms</a
                          ></label
                        >
                      </div>
                    </div>
                    <button
                      class="btn btn-primary btn-block"
                      tabindex="5"
                      @click="redirect()"
                    >
                      Sign up
                    </button>
                  </div>
                  <p class="text-center mt-2">
                    <span>Already have an account?</span
                    ><nuxt-link to="/auth/login"
                      ><span>&nbsp;Sign in instead</span></nuxt-link
                    >
                  </p>
                </div>
              </div>
              <!-- /Register-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Content-->
  </div>
</template>

<script src="../../static/scripts/auth/register.js"></script>

<style scoped>
@import '~static/home/dashboard/app-assets/css/plugins/forms/form-validation.css';
@import '~static/home/dashboard/app-assets/css/pages/page-auth.css';

* {
  font-size: 14px;
}
</style>
